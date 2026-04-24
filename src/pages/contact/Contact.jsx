import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { VscSend, VscMail, VscLocation, VscDeviceMobile } from "react-icons/vsc";
import { ContactWrapper, ContactForm, InfoCards } from './Contact.style';

const Contact = ({ lang = 'uz' }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const translations = {
    uz: {
      title: "Bog'lanish",
      subtitle: "Men bilan aloqa",
      call: "Qo'ng'iroq",
      email: "Elektron pochta",
      location: "Manzil",
      locName: "Samarqand, O'zbekiston",
      namePlace: "To'liq ismingiz",
      emailPlace: "Email manzilingiz",
      subjectPlace: "Mavzu",
      messagePlace: "Xabaringiz",
      sendBtn: "Xabarni yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabar yuborildi!",
      error: "Xatolik yuz berdi!",
      emptyFields: "Barcha maydonlarni to'ldiring!",
      phoneError: "Telefon raqami +998 bilan boshlanishi va 13 ta raqam bo'lishi shart!"
    },
    en: {
      title: "Get In Touch",
      subtitle: "Contact Me",
      call: "Call Me",
      email: "Email",
      location: "Location",
      locName: "Samarkand, Uzbekistan",
      namePlace: "Full Name",
      emailPlace: "Email Address",
      subjectPlace: "Subject",
      messagePlace: "Your Message",
      sendBtn: "Send Message",
      sending: "Sending...",
      success: "Message sent!",
      error: "An error occurred!",
      emptyFields: "Please fill in all fields!",
      phoneError: "Phone must start with +998 and be 13 characters long!"
    }
  };

  const t = translations[lang] || translations.uz;

  // Faqat raqam yozishni va +998 ni saqlashni nazorat qiluvchi mantiq
  const handlePhoneInput = (e) => {
    let value = e.target.value;
    if (!value.startsWith('+998')) {
      value = '+998';
    }
    const cleaned = value.replace(/[^\d+]/g, '');
    e.target.value = cleaned;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    
    const data = {
      name: formData.get('user_name').trim(),
      email: formData.get('user_email').trim(),
      phone: formData.get('user_phone').trim(),
      subject: formData.get('subject').trim(),
      message: formData.get('message').trim(),
    };

    // 1. Toast: Bo'sh maydonlar tekshiruvi
    if (!data.name || !data.email || !data.subject || !data.message) {
      return toast.error(t.emptyFields);
    }

    // 2. Toast: Telefon uzunligi va formati tekshiruvi
    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(data.phone) || data.phone.length !== 13) {
      return toast.error(t.phoneError);
    }

    setLoading(true);
    const botToken = "8787149089:AAFsZ3q79N2f50OPFsb9EhTAVQ1P6vjHbXQ";
    const chatId = "8162236227";

    const text = `📩 *Yangi xabar*\n👤 *Ism:* ${data.name}\n📧 *Email:* ${data.email}\n📞 *Tel:* ${data.phone}\n📌 *Mavzu:* ${data.subject}\n📝 *Xabar:* ${data.message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
      });

      if (res.ok) {
        toast.success(t.success);
        form.current.reset();
        form.current.user_phone.value = "+998";
      } else {
        throw new Error();
      }
    } catch {
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactWrapper id="contact">
      {/* O'ng tomondan chiquvchi toast sozlamasi */}
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999, // Responsive versiyada hamma narsadan tepada turishi uchun
        }}
      />
      
      <div className="contact-main">
        <div className="title">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="contact-container">
          <InfoCards>
            <div className="info-item">
              <VscDeviceMobile className="icon" />
              <div><h3>{t.call}</h3><p>+998 93 339 99 23</p></div>
            </div>
            <div className="info-item">
              <VscMail className="icon" />
              <div><h3>{t.email}</h3><p>ismoilovsayyor62@gmail.com</p></div>
            </div>
            <div className="info-item">
              <VscLocation className="icon" />
              <div><h3>{t.location}</h3><p>{t.locName}</p></div>
            </div>
          </InfoCards>

          {/* noValidate brauzer xabarlarini o'chiradi, toastni ishga tushiradi */}
          <ContactForm ref={form} onSubmit={handleSend} noValidate>
            <div className="input-group">
              <div className="input-box">
                <input type="text" name="user_name" placeholder={t.namePlace} />
              </div>
              <div className="input-box">
                <input type="email" name="user_email" placeholder={t.emailPlace} />
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <input 
                  type="text" 
                  name="user_phone" 
                  defaultValue="+998" 
                  maxLength={13} 
                  onInput={handlePhoneInput} 
                />
              </div>
              <div className="input-box">
                <input type="text" name="subject" placeholder={t.subjectPlace} />
              </div>
            </div>

            <div className="input-box">
              <textarea name="message" rows="5" placeholder={t.messagePlace}></textarea>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? t.sending : t.sendBtn} <VscSend />
            </button>
          </ContactForm>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;