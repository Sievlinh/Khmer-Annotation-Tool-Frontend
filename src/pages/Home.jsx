import Footer from "../components/Footer";
import { FcApproval } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import homepage from "../assets/homepage.jpg";
import {
  FaUpload,
  FaDrawPolygon,
  FaSearch,
  FaCheck,
  FaFileExport,
  FaChartLine,
  FaClipboardList,
} from "react-icons/fa";
import { TbTextScan2 } from "react-icons/tb";

const workflowSteps = [
  {
    title: "OCR gibberish",
    description:
      "Maybe the wrong language is set, or the OCR can’t read the text clearly.",
    icon: <TbTextScan2 className="text-white-500" />,
    color: "bg-orange-500",
  },
  {
    title: "Polygon won’t finish",
    description:
      "You didn’t complete the polygon properly,double-click to close.",
    icon: <FaDrawPolygon className="text-white-500" />,
    color: "bg-blue-500",
  },
  {
    title: "Overlaps causing duplicates",
    description: "Multiple overlapping regions on the same text line.",
    icon: <FaSearch className="text-white-500" />,
    color: "bg-green-500",
  },
  {
    title: "Low accuracy",
    description:
      "The annotation box is too big/loose, or the text is rotated/curved.",
    icon: <FaCheck className="text-white-500" />,
    color: "bg-yellow-500",
  },
];
const dataItems = [
  {
    number: "01",
    title: <span className="text-gray-600">Upload Images</span>,
    description: (
      <>
        <span className=" text-blue-900">Click</span> on select image button to
        adding one or many files (JPG/PNG).
        <p>
          <span className="font-bold text-gray-600">Tip : </span>
          <span>
            {" "}
            Use high-quality, clear images to get better OCR results later.
          </span>
        </p>
      </>
    ),
    color: "bg-red-300",
    icon: <FaUpload style={{ color: "#202381" }} />, // soft red
  },
    {
    number: "04",
    title: <span className="text-gray-600">Validate</span>,
    description: (
      <>
        Compare OCR output with the actual text (ground truth) you enter. 
        <p>
          <span className="font-bold text-gray-600">Tip : </span>
          <span>
            {" "}
            Checks the quality and correct OCR mistakes immediately to
            improve dataset reliability.
          </span>
        </p>
      </>
    ),
    color: "bg-red-400",
    icon: <FaSearch style={{ color: "#202381" }} />,
  },

  {
    number: "02",
    title: <span className="text-gray-600">Annotation</span>,
    description: (
      <>
        Select the type of annotation you need:
        <ul className="list-disc ml-5 mt-2">
          <li>Bounding Box: A rectangular shape to mark the text area.</li>
          <li>
            Polygon: Custom shape that follows the outline of the text.
          </li>
        </ul>
        <p>
          <span className="font-bold text-gray-600">Tip : </span>
          <span>
            {" "}
           Keep bounding boxes tight around the text without cutting letters.
          </span>
        </p>
      </>
    ),
    color: "bg-red-400",
    icon: <FaDrawPolygon style={{ color:"#202381" }} />,
  },

    {
    number: "05",
    title: <span className="text-gray-500">Edit Result</span>,
    description: (
      <>
        <span className="text-gray-500">Click</span> on JSON edit button to
        modify the OCR results or annotations.
        <span className="text-gray-600">Then,</span> apply changes.
        <p>
          <span className="font-bold text-gray-600">Tip : </span>
          <span>
            {" "}
            If something is incorrect you can fix it before exporting.
          </span>
        </p>
      </>
    ),
    color: "bg-red-300",
    icon: <FaClipboardList style={{ color: "#202381" }} />,
  },

    {
    number: "03",
    title: <span className="text-gray-600">Extract Text (OCR)</span>,
    description: (
      <>
        Run or Scan OCR engine to extract text.
        <p>
          <span className="font-bold text-gray-600">Tip : </span>
          <span>
            {" "}
            Transforms image-based text into machine-readable format.
          </span>
        </p>
      </>
    ),
    color: "bg-red-300",
    icon: <FaChartLine style={{ color: "#202381" }} />,
  },

  {
    number: "06",
    title: <span className="text-gray-600">Export</span>,
    description: (
      <>
        Export your annotated data in standard formats JSON/YOLO.
        <p>
          <span className="font-bold text-gray-600">Tip:</span>
          <span>
            {" "}
            Store your JSON files in safe storage.
          </span>
        </p>
      </>
    ),
    color: "bg-red-400",
    icon: <FaFileExport style={{ color: "#202381" }} />,
  },
];

export const Home = () => {
  return (
<div className="home-container">
      {/* Welcome Banner */}
      {/* <div className="flex justify-between items-center h-55 bg-blue-100 p-6 m-4 rounded-lg mt-8 mb-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">
            WELCOME TO HOME PAGE
          </h1>
          <p className="text-blue-500 text-sm">
            Get started to annotate your Khmer text data with utmost precision.
          </p>
        </div>
        <div className="items-center ">
          <img
            src={Nav2}
            alt="Home"
            className="rounded-md max-h-90 object-contain items-center"
          />
        </div>
      </div> */}
      <div className="bg-white m-4 pt-12 h-175 rounded-lg">
        <h2 className="text-2xl font-bold ml-8 text-[#12284c] mb-2 text-start ">
          Welcome To
        </h2>
        <h2 className="text-5xl font-cadt ml-8 text-[#ff3f34] mb-4 text-start" >Khmer Data</h2>
        <h2 className="text-5xl font-cadt ml-8 text-[#ff3f34] text-start" >Annotation Tool</h2>
        {/* Tool Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8">
          {/* Left Content */}
          <div>
            <p className="text-[#12284c] font-semibold max-w-2xl mb-">
              Upload images, annotate text regions, extract Khmer/English text
              with OCR, and validate against ground truth to build high-quality
              datasets.
            </p>

            <ul className="text-[#12284c] font-bold mt-10 space-y-2">
              <li className="flex items-center">
                <FcApproval className="mr-3" /> Bounding box and polygon
                annotations
              </li>
              <li className="flex items-center">
                <FcApproval className="mr-3" /> Khmer and English OCR extraction
              </li>
              <li className="flex items-center">
                <FcApproval className="mr-3" /> Validation with accuracy metrics
              </li>
            </ul>
            <div className="flex gap-4 mt-12">
              {/* Upload Button */}
              <a
                href="/annotate"
                className="bg-[#12284c] text-white px-10 py-3 rounded-2xl flex items-center gap-2 font-cadt"
              >
                {" "}
                Get Started <FaArrowRightLong />{" "}
              </a>

              {/* Scroll Button */}
              <a
                href="#instructions"
                className="bg-[#76bc21] text-white px-10 py-3 rounded-2xl flex items-center gap-2 font-cadt"
              >
                {" "}
                Instruction <MdOutlineArrowDropDown />{" "}
              </a>
            </div>
          </div>
          {/* Right Image Panel */}
          <div className="flex justify-end items-center">
            <div className="bg-white">
              <img
                src={homepage}
                alt="Annotated Document"
                className="rounded-md max-h-100 object-contain"
              />
            </div>
          </div>
        </section>
         <hr className="border-t border-gray-300 w-full" />
      </div>
      {/* Instructions Section */}
<section
        id="instructions"
        className="font-bold mt-10 text-white h-35  bg-[#ff3f34] p-6 m-4 rounded-lg mb-4 items-center text-4xl text-center "
      >
        Annotation Workflow Instructions
      <div className="text-white   text-center mb-2 text-sm mt-5">
        Follow this detailed step-by-step annotation workflow how to annotate
        images, run OCR, validate, and export your results to more efficiently.
      </div>
      
</section>
      
<div className="grid grid-cols-1 md:grid-cols-2 gap-7 rounded-lg p-6 mt-1 mb-2">
  {dataItems.map((item, index) => (
    <div
      key={index}
      className="flex bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300 h-full"
    >
      {/* Left Side - Number */}
      <div className="flex items-center justify-start ">
        <div className="flex items-center justify-center text-center w-12 h-12 text-white text-2xl font-bold rounded-full bg-[#FF6467]">
          {item.number}
        </div>
      </div>

      {/* Middle - Text */}
      <div className="flex-1 px-6 flex flex-col items-start justify-start">
        <h3 className={`font-bold ${item.color.replace("bg", "text")}`}>
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm max-w-md mt-1">
          {item.description}
        </p>
      </div>

      {/* Right Side - Icon/Button */}
      <div className="flex items-center justify-end">
        <div className="flex items-center justify-center  w-12 h-12 rounded-full bg-white border-4 border-gray-100 shadow-sm">
          <span className={`text-2xl ${item.color.replace("bg", "text")}`}>
            {item.icon}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Troubleshooting section */}
     
    {/* <div className=" bg-white shadow-md p-6 m-4 rounded-lg mt-8 mb-4">
        <h2 className="font-bold text-2xl text-[#202381] text-center mb-8">
          Troubleshooting
        </h2>

        <div className="flex flex-row justify-between items-start space-x-6">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/4"
            >
              {/* Dot with icon */}
              {/* <span
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md text-white mb-4 
            ${
              index % 2 === 0
                ? "bg-[#202381]"
                : index % 2 === 1
                ? "bg-[#202382]"
                : "bg-red-300"
            }
          `}
              >
                {step.icon}
              </span>
              {/* Title */}
              {/* <h3 className="text-lg  f text-gray-500">{step.title}</h3>
              {/* Description */}
              {/* <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div> */} 

      <Footer />
    </div>
  );
};

export default Home;
