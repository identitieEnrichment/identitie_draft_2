import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NavigationBar from "../components/Navigation/NavigationBar";
gsap.registerPlugin(ScrollToPlugin);
const Disclaimer = () => {
  useEffect(() => {
    if (window.location.hash) {
      const target = window.location.hash; // e.g., "#privacy"
      gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 50 } });
    }
  }, []);
  return (
    <div className="bg-[#0d1116] w-full min-h-screen">
      <Header page={"Home"} layout={"Services"} />
      <NavigationBar layout={""} />

      <h1 className="text-white font-semibold lg:pt-36 pt-24 text-2xl  lg:text-3xl lg:mb-16 lg: justify-center  lg:px-20 px-4 mb-12 ">
        Legal & Policy Information
      </h1>
      <div id="disclaimer" className="lg:px-20 px-4  ">
        <h2 class="mb-2 text-lg font-semibold text-white ">DISCLAIMER</h2>
        <div className="text-[#A8A8A8]">
          <p>
            Identitie Enrichment Private Limited (“IDENTITIE”, “we”, “our”, or
            “us”) is a global brand architecture and fulfillment company
            offering branding, marketing, sales, execution and related services.
            While we endeavor to provide accurate, timely, and reliable
            information on our website, the content is offered for informational
            purposes only and should not be considered professional advice. By
            using our website, you acknowledge and agree that:
          </p>
          <ul class=" space-y-1  list-disc list-inside px-2 mt-4 ">
            <li>
              The content is provided “as is” without warranties of any kind,
              either express or implied.
            </li>
            <li>
              IDENTITIE is not liable for any errors, omissions, or for any loss
              or damage arising from the use of or reliance on the information
              provided.
            </li>
            <li>
              We reserve the right to modify, update, or remove content at any
              time without prior notice.
            </li>
          </ul>
        </div>
      </div>

      <div id="privacy" className="lg:px-20 px-4 my-12 ">
        <h2 class="mb-2 text-lg font-semibold text-white ">PRIVACY POLICY</h2>
        <div className="text-[#A8A8A8]">
          <p>
            IDENTITIE is committed to protecting your privacy and ensuring the
            security of your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website or engage our services.
          </p>
          <ol class="ps-2 mt-2 space-y-4 list-decimal list-inside">
            <li className="">
              <strong> Information We collect</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  <span className="font-medium">Personal Data : </span> This
                  includes your name, email address, phone number, company
                  details, and any other information you voluntarily provide
                  when contacting us or signing up for our services.
                </li>
                <li>
                  <span className="font-medium">Usage Data : </span> We
                  automatically collect data such as your IP address, browser
                  type, pages visited, and other usage details to help us
                  understand how you interact with our website.
                </li>
                <li>
                  <span className="font-medium">
                    Cookies & Tracking Technologies :{" "}
                  </span>{" "}
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze website traffic, and personalize
                  content
                </li>
              </ul>
            </li>
            <li className="">
              <strong> How We Use Your Information</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  <span className="font-medium">Service Delivery : </span> To
                  provide and improve our brand architecture, marketing, and
                  fulfillment services.
                </li>
                <li>
                  <span className="font-medium">Communication : </span> To
                  respond to your inquiries, send updates, and share promotional
                  material (subject to your consent).
                </li>
                <li>
                  <span className="font-medium">Analytics : </span> To monitor
                  website performance and user engagement so that we can enhance
                  our offerings.
                </li>
                <li>
                  <span className="font-medium">Legal Compliance : </span> To
                  adhere to legal obligations and protect our rights.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Data Protection & Security</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  We implement industry-standard security measures to protect
                  your personal data. However, no online system is entirely
                  secure, and we cannot guarantee absolute security.
                </li>
                <li>
                  Your data is accessible only to authorized personnel and is
                  stored securely.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Third-Party Disclosures</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  We do not sell or rent your personal data to third parties.
                </li>
                <li>
                  Your information may be shared with trusted partners or
                  service providers who assist in operating our website or
                  delivering our services, provided they maintain
                  confidentiality and security.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Your Rights</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  Access and Correction: You can request access to, or
                  correction of, your personal data.
                </li>
                <li>
                  Opt-Out: You may opt out of receiving marketing communications
                  at any time.
                </li>
                <li>
                  For any privacy-related inquiries or requests, please contact
                  us at identitie.ie@gmail.com
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div id="terms" className="lg:px-20 px-4 mb-12  ">
        <h2 class="mb-2 text-lg font-semibold text-white ">
          TERMS & CONDITIONS
        </h2>
        <div className="text-[#A8A8A8]">
          <p>
            By accessing or using the IDENTITIE website and services, you agree
            to the following Terms & Conditions. Please read them carefully.
          </p>
          <ol class="ps-2 mt-2 space-y-4 list-decimal list-inside">
            <li className="">
              <strong> Use of Our Services</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  <span className="font-medium">Eligibility : </span> You must
                  be at least 18 years old or have the necessary consent to use
                  our services.
                </li>
                <li>
                  <span className="font-medium">Lawful Use : </span> You agree
                  to use our website and services only for lawful purposes and
                  in compliance with all applicable regulations.
                </li>
                <li>
                  <span className="font-medium">Prohibited Conduct : </span>{" "}
                  Unauthorized use, including but not limited to copying,
                  distributing, or modifying our content without permission, is
                  strictly prohibited.
                </li>
              </ul>
            </li>

            <li className="">
              <strong> Intellectual Property</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  All materials on our website—including text, graphics, logos,
                  images, and software—are the property of IDENTITIE and are
                  protected by applicable intellectual property laws.
                </li>
                <li>
                  Unauthorized reproduction or distribution of our content is
                  prohibited unless expressly permitted by us.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Service Terms & Modifications</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  We reserve the right to modify, suspend, or discontinue our
                  services (or any part thereof) at any time without notice.
                </li>
                <li>
                  We are not responsible for any interruptions, errors, or
                  inaccuracies in our service due to maintenance, updates, or
                  other factors.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Payments and Refunds</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  Payment for our services must be made according to the terms
                  agreed upon during the service engagement.
                </li>
                <li>
                  Refunds will be considered only when IDENTITIE fails to meet
                  its contractual obligations, subject to the terms of your
                  agreement with us.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Limitation of Liability</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  In no event shall IDENTITIE be liable for any indirect,
                  incidental, consequential, or punitive damages arising out of
                  your use of our website or services.
                </li>
                <li>
                  Your use of our services is at your own risk, and we do not
                  guarantee uninterrupted or error-free service.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Governing Law & Dispute Resolution</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  These Terms & Conditions shall be governed by and construed in
                  accordance with the laws of [Insert Jurisdiction].
                </li>
                <li>
                  Any disputes arising from these terms will be subject to
                  mediation or arbitration before pursuing legal action.
                </li>
              </ul>
            </li>
            <li className="">
              <strong> Amendments</strong>

              <ul class=" space-y-1  ps-4 list-disc list-inside px-2 mt-2 ">
                <li>
                  We may update this Disclaimer, Privacy Policy, and Terms &
                  Conditions periodically. Changes will be posted on this page,
                  and continued use of our website or services signifies your
                  acceptance of those changes.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="lg:px-20 px-4  mb-12">
        <h2 class="mb-2 text-lg font-semibold text-white ">
          CONTACT INFORMATION
        </h2>
        <div className="text-[#A8A8A8]">
          <p>
            For any questions, concerns, or requests regarding our policies,
            please contact us at{""}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=identitie.ie@gmail.com"
              target="_blank"
              class="text-current text-sm ml-3"
            >
              <strong className="underline">identitie.ie@gmail.com</strong>
            </a>{" "}
            <br></br> This policy is designed to protect both the rights and
            interests of both our users and IDENTITIE on a global scale, while
            ensuring transparency in all our operations. We encourage you to
            review it periodically and reach out if you have any questions.
          </p>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Disclaimer;
