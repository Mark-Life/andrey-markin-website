import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Andrey Markin & Mark-Life Ltd',
  description: 'Privacy Policy for Andrey Markin\'s and Mark-Life Ltd websites. Learn about how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24"> {/* Add padding-top to account for fixed navbar */}
        <article className="max-w-4xl mx-auto px-4 py-8 prose prose-invert">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="mb-6">
            I protect your personal data in compliance with the GDPR 
            and other privacy laws. This Privacy Policy outlines the types of information I collect on andrey-markin.com and mark-life.com
            and how I use and protect it.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Collection of Personal Information</h2>
            <p>
              I collect personal information through a form on the main page, which you may fill out if you&apos;re 
              interested in hiring me. The information I collect includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email or other contact information that you choose to provide</li>
              <li>Project description</li>
            </ul>
            <p>
              This information is used solely to assess potential project opportunities and to correspond with you 
              regarding your inquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Personal Information</h2>
            <p>
              Your personal information is used exclusively for responding to and facilitating your hiring request. 
              I do not use your email address or any other information you provide for marketing purposes, nor will 
              I add you to any unsolicited mailing lists.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Withdrawal of Consent</h2>
            <p>
              If you change your mind and would like your personal information removed from my records, or if you 
              wish to update or correct any details, you may contact me directly. Upon receipt of your request via 
              email, we will promptly delete your information from my database.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
            <p>
              I do not share, sell, rent, or trade your personal information with any third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Automatically Collected Information</h2>
            <p>
              My website may collect certain information about your visit, such as the type of browser you use, 
              the date and time of your access, and the website that referred you to me. This information is used 
              solely for my internal analytics and to improve the quality of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Google Analytics</h2>
            <p>
              I utilize Google Analytics to analyze usage patterns on my website. Google Analytics uses cookies to 
              collect non-personally identifiable information about website usage. You can read Google&apos;s privacy 
              policy here: <a href="https://www.google.com/policies/privacy/" className="text-blue-400 hover:text-blue-300">
              https://www.google.com/policies/privacy/</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p>
              My website is not intended for children under the age of 13, and I do not knowingly collect personal 
              data from this age group. If you are a parent or guardian and believe I might have such information, 
              please contact us for its immediate removal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Policy Changes</h2>
            <p>
              This privacy policy may be updated periodically to reflect changes to my personal data practices. 
              I will post a prominent notice on my website to notify you of any significant changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p>
              If you have any questions, concerns, or requests regarding this privacy policy, please reach out to 
              me at: <a href="mailto:support@mark-life.com" className="text-blue-400 hover:text-blue-300">support@mark-life.com</a>
            </p>
          </section>

          <footer className="mt-12 text-sm text-gray-400">
            Effective as of March 27, 2025
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
