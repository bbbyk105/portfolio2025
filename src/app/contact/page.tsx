import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/components/organisms/ContactForm";
import SectionHeader from "@/components/molecules/SectionHeader";

export const metadata = {
  title: "Portfolio | Contact",
  description: "Get in touch with me",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="text-center mb-12">
          <SectionHeader
            title="CONTACT"
            subtitle="お問い合わせやお仕事のご依頼は、以下のフォームまたは直接メールにてご連絡ください。。"
          />
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
                  <p className="text-gray-400">東京都新宿区下落合4-27-11</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-full">
                  <FaEnvelope className="text-xl text-teal-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400">byakkokondo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
