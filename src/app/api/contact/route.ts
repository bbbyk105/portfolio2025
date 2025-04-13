import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // APIキーが設定されているか確認
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "メール設定が不完全です" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactFormData;
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    console.log("Preparing to send email with Resend");

    // 確認済みドメインからの送信に変更
    const fromEmail = "contact@byakko-enjineer.com";
    const fromName = "Byakko Portfolio";

    const htmlContent = `
      <h1>お問い合わせがありました</h1>
      <p><strong>名前:</strong> ${name}</p>
      <p><strong>メールアドレス:</strong> ${email}</p>
      <p><strong>件名:</strong> ${subject || "なし"}</p>
      <p><strong>メッセージ:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `;

    // 管理者宛て
    const adminEmailResponse = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: "byakkokondo@gmail.com",
      subject: `お問い合わせ: ${subject || "お問い合わせフォームから"}`,
      html: htmlContent,
      replyTo: email,
    });

    console.log("Admin email response:", adminEmailResponse);

    // 自動返信
    const autoReplyHtml = `
      <p>${name} 様</p>
      <p>お問い合わせありがとうございます。</p>
      <p>以下の内容で受け付けました。</p>
      <hr />
      <p><strong>件名:</strong> ${subject || "なし"}</p>
      <p><strong>メッセージ:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      <hr />
      <p>このメールは自動送信です。</p>
    `;

    const autoReplyResponse = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      subject: "お問い合わせありがとうございます",
      html: autoReplyHtml,
    });

    console.log("Auto-reply email response:", autoReplyResponse);

    return NextResponse.json({
      success: true,
      adminEmail: adminEmailResponse.data?.id,
      autoReply: autoReplyResponse.data?.id,
    });
  } catch (error) {
    console.error("Resend Error:", error);

    // エラーの詳細情報を取得
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : "";

    console.error("Error message:", errorMessage);
    console.error("Error stack:", errorStack);

    // Resend APIからのエラーオブジェクトがある場合に詳細を出力
    if (error instanceof Error && typeof error === "object" && error !== null) {
      const errorObj = error as Error & Record<string, unknown>;
      if ("response" in errorObj && errorObj.response) {
        console.error("Resend API error details:", errorObj.response);
      }
    }

    return NextResponse.json(
      {
        error: "メール送信に失敗しました",
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
