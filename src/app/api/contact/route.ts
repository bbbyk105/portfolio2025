import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

// リクエストの型定義
interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // リクエストボディからフォームデータを取得
    const body = (await request.json()) as ContactFormData;
    const { name, email, subject, message } = body;

    // デバッグ情報を出力
    console.log("Form data received:", { name, email, subject });

    // 必須フィールドのバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // Amazon SESのSMTP設定
    const smtpEndpoint =
      process.env.SMTP_ENDPOINT || "email-smtp.ap-northeast-1.amazonaws.com";
    const port = 587;
    const smtpUsername = process.env.SES_USER;
    const smtpPassword = process.env.SES_PASSWORD;

    // 重要: 検証済みのメールアドレスを使用
    const fromAddress = "byakkokondo@gmail.com"; // あなたの検証済みメールアドレス

    console.log("Using verified email address:", fromAddress);

    // SMTPトランスポーターの作成
    const smtp = createTransport({
      host: smtpEndpoint,
      port: port,
      secure: false, // TLS接続
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    });

    // 管理者宛てのメール設定
    const adminTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>新しいお問い合わせ</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 24px;
          }
          .header {
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 500;
          }
          .contact-item {
            margin-bottom: 20px;
          }
          .label {
            font-weight: 500;
            margin-bottom: 4px;
          }
          .message-content {
            white-space: pre-line;
            padding: 12px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          .footer {
            margin-top: 30px;
            font-size: 13px;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>お問い合わせがありました</h1>
          </div>
          
          <div class="contact-item">
            <div class="label">名前</div>
            <div>${name}</div>
          </div>
          
          <div class="contact-item">
            <div class="label">メールアドレス</div>
            <div>${email}</div>
          </div>
          
          <div class="contact-item">
            <div class="label">件名</div>
            <div>${subject || "なし"}</div>
          </div>
          
          <div class="contact-item">
            <div class="label">メッセージ</div>
            <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
          </div>
          
          <div class="footer">
            このメールはポートフォリオサイトのお問い合わせフォームから自動送信されました
          </div>
        </div>
      </body>
      </html>
    `;

    // 自動返信用のメール設定
    const autoReplyTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>お問い合わせありがとうございます</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            padding: 24px;
          }
          .header {
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 16px;
            margin-bottom: 24px;
          }
          .header h1 {
            margin: 0;
            font-size: 20px;
            font-weight: 500;
          }
          .content {
            margin-bottom: 24px;
          }
          .separator {
            border-top: 1px solid #e0e0e0;
            margin: 24px 0;
          }
          .summary h2 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .contact-item {
            margin-bottom: 20px;
          }
          .label {
            font-weight: 500;
            margin-bottom: 4px;
          }
          .message-content {
            white-space: pre-line;
            padding: 12px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          .footer {
            margin-top: 30px;
            font-size: 13px;
            color: #666;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>お問い合わせありがとうございます</h1>
          </div>
          
          <div class="content">
            <p>${name} 様</p>
            <p>お問い合わせありがとうございます。</p>
            <p>内容を確認次第、ご連絡いたします。</p>
          </div>
          
          <div class="separator"></div>
          
          <div class="summary">
            <h2>お問い合わせ内容</h2>
            
            <div class="contact-item">
              <div class="label">件名</div>
              <div>${subject || "なし"}</div>
            </div>
            
            <div class="contact-item">
              <div class="label">メッセージ</div>
              <div class="message-content">${message.replace(
                /\n/g,
                "<br>"
              )}</div>
            </div>
          </div>
          
          <div class="footer">
            このメールはポートフォリオサイトからの自動返信です
          </div>
        </div>
      </body>
      </html>
    `;

    // 管理者宛てのメールメッセージ
    const adminMessage = {
      from: fromAddress,
      to: "byakkokondo@gmail.com", // 管理者のアドレス
      subject: `お問い合わせ: ${subject || "お問い合わせフォームから"}`,
      html: adminTemplate,
    };

    console.log("Sending admin email...");
    try {
      // 管理者宛てメール送信
      const adminResult = await smtp.sendMail(adminMessage);
      console.log("管理者へのメール送信成功:", adminResult.messageId);
    } catch (error: unknown) {
      console.error("管理者へのメール送信エラー:", error);
      throw new Error(
        `メール送信エラー: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`
      );
    }

    // 注意: サンドボックス環境では送信先も検証済みである必要がある
    // フォームで入力されたメールアドレスが検証されていない場合は送信しない
    if (email === "byakkokondo@gmail.com") {
      // 自動返信用のメールメッセージ
      const autoReplyMessage = {
        from: fromAddress,
        to: email, // 問い合わせた人のアドレス
        subject: "お問い合わせありがとうございます",
        html: autoReplyTemplate,
      };

      console.log("Sending auto-reply email...");
      try {
        // 自動返信メール送信
        const autoReplyResult = await smtp.sendMail(autoReplyMessage);
        console.log("自動返信メール送信成功:", autoReplyResult.messageId);
      } catch (error: unknown) {
        console.error("自動返信メール送信エラー:", error);
        // 自動返信が失敗しても全体のプロセスは続行
      }
    } else {
      console.log(
        "スキップ: 検証されていないメールアドレスへの自動返信を送信しません:",
        email
      );
    }

    // 正常なレスポンスを返す
    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。ありがとうございます。",
    });
  } catch (error: unknown) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        error: "メール送信に失敗しました",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
