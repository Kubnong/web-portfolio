import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Rocket, GraduationCap, Trophy, BriefcaseBusiness } from "lucide-react";
import SwiperComponent from "@/component/SwiperComponent";

export default function Home() {
  return (
    <div className="p-10 bg-[#292d33] scroll-smooth">
      {/*NavBar*/}
      <div className="hidden md:flex items-center justify-center gap-x-150">
        <div className="text-[25px] font-bold">PHATTHARAPONG</div>
        <div className="flex gap-5 font-semi text-[20px]">
          <a href='#skills'>
            Skills
          </a>
          <a href='#experiences'>Experiences</a>
          <a href='#works'>Works</a>
          <a href='#education'>Education</a>
          <a href='#awards'>Awards & Certificate</a>
        </div>
      </div>
      {/*Introduce and Picture*/}
      <div className="flex flex-col items-center justify-center p-10 gap-x-60 gap-y-10 md:flex-row">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src="/phattharapong.jpg"
              width={350}
              height={250}
              alt="Picture of Phattharapong"
              className="rounded-[50px]"
            />
          </div>
          <div className="text-[25px]">
            Phattharapong Rodyo <br />
          </div>
          <div className="text-[20px]">ภัทรพงศ์ รอดโย</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-[30px]">
            Hi I'm Phattharapong Rodyo !
          </div>
          <div className="text-[18px]">
            A passionate Full-Stack Developer from Thailand
          </div>
          <div className="flex gap-2">
            <Link href="https://github.com/Kubnong" target="_blank">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                width={40}
                height={30}
                alt="Picture Github"
                className="bg-gray-200 p-1 rounded"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pattarapong-rodyo-566a7b361/"
              target="_blank"
            >
              <Image
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                width={40}
                height={30}
                alt="Picture Linkedin"
                className="bg-gray-200 p-1 rounded"
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-350 my-4 border-gray-300 justify-self-center" />
      {/*Skills*/}
      <div className="flex flex-col items-center justify-center py-5 gap-y-5">
        <div id='skills' className="flex gap-1 font-bold text-[30px] items-center justify-center scroll-mt-14">
          <Lightbulb className="size-8" />
          Skills
        </div>
        <div className="flex flex-col lg:flex-row gap-10 p-2">
          {" "}
          {/* คุมอันใหญ่ */}
          <div className="flex flex-col items-center gap-y-5">
            <div className="text-[22px]">Frontend</div>
            <div className="flex flex-col font-normal text-[16px] items-center">
              Languages
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="https://www.svgrepo.com/show/452228/html-5.svg"
                  width={50}
                  height={30}
                  alt="Picture html"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  width={50}
                  height={30}
                  alt="Picture css"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/353631/dart.svg"
                  width={50}
                  height={30}
                  alt="Picture dart"
                  className="bg-gray-200 p-1 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col font-normal text-[18px] items-center">
              Framework
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="https://www.svgrepo.com/show/369457/nextjs.svg"
                  width={50}
                  height={30}
                  alt="Picture Nextjs"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/373604/flutter.svg"
                  width={50}
                  height={30}
                  alt="Picture Flutter"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/493625/vue-vuejs-javascript-js-framework.svg"
                  width={50}
                  height={30}
                  alt="Picture Vue"
                  className="bg-gray-200 p-1 rounded"
                />
              </div>
            </div>
          </div>
          {/* <div className="h-70 w-px bg-gray-300 mx-4 justify-self-center"></div> เส้นแนวตั้ง */}
          <div className="flex flex-col items-center gap-y-5">
            <div className="text-[22px]">Backend</div>
            <div className="flex flex-col font-normal text-[18px] items-center">
              Languages
              <div className="grid grid-cols-3 gap-4">
                <Image
                  src="https://www.svgrepo.com/show/349419/javascript.svg"
                  width={50}
                  height={30}
                  alt="Picture Javascript"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/452234/java.svg"
                  width={50}
                  height={30}
                  alt="Picture Java"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/452091/python.svg"
                  width={50}
                  height={30}
                  alt="Picture Python"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/c-1.svg"
                  width={50}
                  height={30}
                  alt="Picture C"
                  className="bg-gray-200 p-1 rounded"
                />
                <div className="w-[50px] h-[56px] bg-gray-200 p-1 rounded flex items-center justify-center">
                  <Image
                    src="https://docs.soliditylang.org/en/latest/_images/solidity_logo.svg"
                    width={50}
                    height={30}
                    alt="Picture Solidity"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-normal text-[18px] items-center">
              Framework
              <div className="flex gap-4 justify-self-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/nodejs.svg"
                  width={100}
                  height={30}
                  alt="Picture NodeJs"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
                  width={100}
                  height={30}
                  alt="Picture ExpressJs"
                  className="bg-gray-200 p-1 rounded"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-[22px] items-center gap-y-5">
              Libraries
              <div className="grid grid-cols-3 gap-2">
                <Image
                  src="https://www.svgrepo.com/show/452092/react.svg"
                  width={50}
                  height={30}
                  alt="Picture React"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  width={50}
                  height={30}
                  alt="Picture Tailwind"
                  className="bg-gray-200 p-1 rounded"
                />
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                  width={58}
                  height={30}
                  alt="Picture React_native"
                  className="bg-gray-200 p-1 rounded"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[22px] items-center gap-y-5">
            Database
            <div className="grid grid-cols-3 items-center gap-4">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg"
                width={49}
                height={30}
                alt="Picture MySql"
                className="bg-gray-200 p-1 rounded"
              />
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS2i7XPgebPMKx-a6IDPO5ai8kIP6oZ501Q&s"
                width={50}
                height={30}
                alt="Picture Sqlite"
                className="bg-gray-200 p-1 rounded"
              />
              <div className="w-[50px] h-[50px] bg-gray-200 p-1 rounded flex items-center justify-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                  width={30}
                  height={30}
                  alt="Picture Solidity"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[22px] items-center gap-y-5">
            Tools
            <div className="grid grid-cols-3 items-center gap-4">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                width={50}
                height={30}
                alt="Picture Vscode"
                className="bg-gray-200 p-1 rounded"
              />
              <div className="w-[50px] h-[50px] bg-gray-200 p-1 rounded flex items-center justify-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/git.svg"
                  width={40}
                  height={30}
                  alt="Picture Solidity"
                  className="object-contain"
                />
              </div>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                width={50}
                height={30}
                alt="Picture Github"
                className="bg-gray-200 p-1 rounded"
              />
              <div className="w-[50px] h-[50px] bg-gray-200 p-1 rounded flex items-center justify-center">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/figma-icon.svg"
                  width={30}
                  height={30}
                  alt="Picture Solidity"
                  className="object-contain"
                />
              </div>
              <Image
                src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                width={50}
                height={30}
                alt="Picture Postman"
                className="bg-gray-200 p-1 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-350 my-4 border-gray-300 justify-self-center" />
      {/*Experiences*/}
      <div id='experiences' className="flex flex-col items-center py-5 scroll-mt-14">
        <div className="flex gap-1 font-bold text-[25px] items-center justify-center">
          <Rocket className="size-8" />
          Experiences
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div>Botnoi Group</div>
            <div>Apr 2025 - Jun 2025 (2month)</div>
          </div>
          <hr className="w-20 md:w-10"/>
          <div>Mobile Application Developer (Internship)</div>
        </div>
      </div>
      <hr className="w-350 my-4 border-gray-300 justify-self-center" />
      {/*Works*/}
      <div id='works' className="flex flex-col items-center py-5 gap-2 scroll-mt-14">
        <div className="flex gap-1 text-[25px]">
          <BriefcaseBusiness className="size-8"/>
          Works
        </div>
        <div className="flex flex-col lg:flex-row gap-3 p-2">
          <div className="flex flex-col bg-[#474747e3] rounded-2xl p-3">
            <Image
              src="/Proj_java.png" 
              width={450} 
              height={100} 
              alt="Proj_java"
              className="object-contain bg-white rounded-lg opacity-80"
            />
            <div className="flex flex-col gap-1 p-3">
              <div className="font-bold text-[24px] text-blue-400">
                calculate the area
              </div>
              <div className="text-[14px] text-gray-400">
                calculate the area of various shapes, developed using Java.
              </div>
              <div className="flex font-bold text-[18px] justify-center text-blue-300">
                Technologies
              </div>
              <div className="text-[14px]">
                Java
              </div>
            </div>
          </div>   
          <div className="flex flex-col bg-[#474747e3] rounded-2xl p-3">
            <Image
              src="/Proj_web.png" 
              width={500} 
              height={100} 
              alt="Proj_java"
              className="object-contain bg-white rounded-lg opacity-80"
            />
            <div className="flex flex-col gap-1 p-3">
              <div className="font-bold text-[24px] text-blue-400">
                Web Portfolio
              </div>
              <div className="text-[14px] text-gray-400">
                Phattharapong Rodyo personal web portfolio 
              </div>
              <div className="flex font-bold text-[18px] justify-center text-blue-300">
                Technologies
              </div>
              <div className="text-[14px]">
                Next.js Tailwind Css, Swiper, Javascript
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#474747e3] rounded-2xl p-3">
            <Image
              src="/Proj_Mobile.png" 
              width={450} 
              height={100} 
              alt="Proj_Easywork"
              className="object-contain bg-white rounded-lg opacity-80"
            />
            <div className="flex flex-col gap-1 p-3">
              <div className="font-bold text-[24px] text-blue-400">
                Mobile Project Easywork
              </div>
              <div className="text-[14px] text-gray-400 ">
                Application for find freelancer or for freelancers to post<br/>
                the services they offer and are available to work on.
              </div>
              <div className="flex font-bold text-[18px] justify-center text-blue-300">
                Technologies
              </div>
              <div className="text-[14px]">
                Javascript, React Native, Sqlite, NodeJs, Express, Expo
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-350 my-4 border-gray-300 justify-self-center" />
      {/*Education*/}
      <div id='education' className="flex flex-col items-center py-5 scroll-mt-14">
        <div className="flex gap-1 text-[25px]">
          <GraduationCap className="size-8" />
          Education
        </div>
        <div className="flex flex-col gap-y-5">
          <div>
            <div>2022 - Present</div>
            <div>Bachelor of Science Program in Computer Science</div>
            <div>Kasetsart University Kamphaeng Saen Campus</div>
          </div>
          <hr className="w-95" />
          <div>
            <div>2017 - 2022</div>
            <div>Science and Mathematics</div>
            <div>Takhliprachasan School</div>
            <div>GPAX 3.89</div>
          </div>
        </div>
      </div>
      <hr className="w-350 my-4 border-gray-300 justify-self-center" />
      {/*Awards & Certificate*/}
      <div id='awards' className="flex flex-col items-center py-5 gap-y-5 scroll-mt-14">
        <div className="flex gap-1 text-[25px]">
          <Trophy className="size-8" />
          Awards & Certificate
        </div>
        <SwiperComponent/>
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-5">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image
              src="/Cer_Botnoi.jpg"
              width={340}
              height={100}
              alt="Cert_Botnoi"
            />
            <div>
              Mobile Application Developer (Botnoi)
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image
              src="/Cert_Frontend.jpg"
              width={350}
              height={100}
              alt="Cert_Frontend"
            />
            <div>
              HTML to React
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image 
              src="/Cert_Ai.jpg" 
              width={350} 
              height={100} 
              alt="Cert_Ai" 
            />
            <div>
              Ai For thai
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}