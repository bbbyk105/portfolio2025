import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // 必須フィールドのバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST as string,
      port: parseInt(process.env.EMAIL_PORT as string, 10),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    // 管理者宛てのメール設定 - シンプルなHTMLテンプレート
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

    // 自動返信用のメール設定 - シンプルなHTMLテンプレート
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

    // メール送信オプション
    const mailOptions = {
      from: process.env.EMAIL_FROM as string,
      to: "byakkokondo@gmail.com", // 受信先メールアドレス
      subject: `お問い合わせ: ${subject || "お問い合わせフォームから"}`,
      html: adminTemplate,
    };

    // 自動返信用のメール設定
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM as string,
      to: email,
      subject: "お問い合わせありがとうございます",
      html: autoReplyTemplate,
    };

    // メール送信
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    // 正常なレスポンスを返す
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
