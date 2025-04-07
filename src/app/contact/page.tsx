import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactForm from "@/components/organisms/ContactForm";

export const metadata = {
  title: "Portfolio | Contact",
  description: "Get in touch with me",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">CONTACT</h1>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            お問い合わせやお仕事のご依頼は、以下のフォームまたは直接メールにてご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div>
            <h2 className="text-2xl font-bold mb-6">CONTACT INFO</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-xl text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-gray-400">東京都渋谷区</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <FaEnvelope className="text-xl text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <FaPhone className="text-xl text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">090-XXXX-XXXX</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">FOLLOW ME</h2>
              <div className="flex gap-4">
                {/* Social icons can be added here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
