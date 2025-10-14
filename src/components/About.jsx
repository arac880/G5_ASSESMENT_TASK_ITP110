import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-green-900 mb-4">
            Brief History of Pamantasan ng Cabuyao (PnC)
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* History Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-16 border border-green-100">
          <div className="text-gray-800 leading-relaxed text-justify space-y-5 text-lg">
            <p>
              Pamantasan ng Cabuyao (PnC) was established through{" "}
              <strong>Municipal Ordinance No. 2003-059</strong>, signed by{" "}
              <strong>Mayor Proceso D. Aguillo</strong> on{" "}
              <strong>April 16, 2003</strong>. It was created following the
              closure of the{" "}
              <strong>
                Laguna State Polytechnic College (LSPC)–Cabuyao Campus
              </strong>
              , which ended operations on <strong>March 31, 2003</strong> due to
              administrative issues.
            </p>

            <p>
              With guidance from <strong>Dr. Benjamin Tayabas</strong>,
              then-president of the{" "}
              <strong>Pamantasan ng Lungsod ng Maynila (PLM)</strong>, and the
              efforts of local leaders and educators, PnC was officially
              inaugurated by{" "}
              <strong>President Gloria Macapagal Arroyo</strong> on{" "}
              <strong>June 19, 2003</strong> and began operations on{" "}
              <strong>July 31, 2003</strong>. Initially, it offered programs in{" "}
              <strong>
                Business Administration, Information Technology, Education,
                Nursing,
              </strong>{" "}
              and <strong>Midwifery</strong>.
            </p>

            <p>
              PnC earned <strong>CHED Institutional Recognition</strong> in{" "}
              <strong>2017</strong> and was granted access to the{" "}
              <strong>Free College Education Program (RA 10931)</strong> in{" "}
              <strong>2019</strong>, joining 76 LCUs nationwide offering free
              tertiary education.
            </p>

            <p>
              Today, PnC holds <strong>12 Level II</strong> and{" "}
              <strong>2 Level I ALCUCOA-accredited programs</strong>, producing
              topnotchers in <strong>Education, Nursing,</strong> and{" "}
              <strong>Engineering</strong>. The university continues to pursue
              excellence in instruction, research, and community service,
              envisioning itself as the{" "}
              <strong>premier local university in Region IV</strong> committed
              to holistic and quality education.
            </p>
          </div>
        </div>

        {/* Faculty & Admin Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-3">
            Administrative Officers and Faculty Members
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Administrative Officers */}
          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Administrative Officers
            </h3>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li>
                <strong>DR. ROBERTO F. RAÑOLA JR.</strong>
                <br />
                <span className="text-gray-600">University President</span>
              </li>
              <li>
                <strong>DR. RENELINA D. MAÑABO</strong>
                <br />
                <span className="text-gray-600">Executive Vice President</span>
              </li>
              <li>
                <strong>DR. GEORGE V. LAMBOT</strong>
                <br />
                <span className="text-gray-600">
                  Vice President for Academics and Student Services
                </span>
              </li>
              <li>
                <strong>DR. JESSICA D. REY</strong>
                <br />
                <span className="text-gray-600">
                  Vice President for Planning, Research, and Extension
                </span>
              </li>
            </ul>
          </div>

          {/* Faculty Members */}
          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Faculty Members
            </h3>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li>
                <strong>DR. GIMA B. MONTECILLO</strong>
                <br />
                <span className="text-gray-600">
                  Dean, College of Computing Studies
                </span>
              </li>
              <li>
                <strong>ASST. PROF. ARCELITO C. QUIATCHON</strong>
                <br />
                <span className="text-gray-600">
                  BSIT Department Chair, College of Computing Studies
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm italic">
          <p>
            “Proud to be Dangal ng Bayan"
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
