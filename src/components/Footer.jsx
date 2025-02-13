import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
       <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
      viewBox="0 0 1440 100"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="#14532d" offset="0%" />
          <stop stopColor="#14532d" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,0L48,11.7C96,23,192,47,288,51.7C384,57,480,43,576,31.7C672,20,768,10,864,13.3C960,17,1056,33,1152,35C1248,37,1344,23,1440,26.7C1536,30,1632,50,1728,63.3C1824,77,1920,83,2016,80C2112,77,2208,63,2304,50C2400,37,2496,23,2592,30C2688,37,2784,63,2880,66.7C2976,70,3072,50,3168,43.3C3264,37,3360,43,3456,45C3552,47,3648,43,3744,38.3C3840,33,3936,27,4032,31.7C4128,37,4224,53,4320,55C4416,57,4512,43,4608,36.7C4704,30,4800,30,4896,25C4992,20,5088,10,5184,16.7C5280,23,5376,47,5472,46.7C5568,47,5664,23,5760,26.7C5856,30,5952,60,6048,70C6144,80,6240,70,6336,56.7C6432,43,6528,27,6624,18.3C6720,10,6816,10,6864,10L6912,10L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100,192,100,96,100,48,100L0,100Z"
      />
    </svg>
      <div className="bg-green-900  text-white p-5 md:p-20">
        <div className="md:grid grid-cols-3 gap-20 ">
          <div>
            <img
              className="h-20 w-34  ml-[-35px]"
              src="/assets/LOK-removebg-preview.png"
              alt=""
            />
            <p className="text-gray-200 mt-8">
              Lok Kalyan Samiti is a non-profit, apolitical voluntary
              organization based in New Delhi and registered under the Societies
              Act, 1861.
            </p>
          </div>
          <div>
            <h6 className="font-semibold text-2xl mt-10 md:mt-0">Links</h6>
            <div className="grid grid-cols-2 gap-5">
            <div>
            <a className="mt-5 block text-sm text-gray-200" href="">
              History
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Milestones
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Chakkarpur Centre
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Nandnagri Centre
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              How To Domate
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              About Us
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Blogs
            </a>
            </div>
            <div>
            <div>
            <a className="mt-5 block text-sm text-gray-200" href="">
              Our Program
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Tax Rebates
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              OPD Timings
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Awards
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              FAQs
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Privacy Policy
            </a>
            <a className="mt-2 block text-sm text-gray-200" href="">
              Terms & Condition
            </a>
            </div>
            </div>
            </div>

          </div>
          <div>
            <h6 className="font-semibold text-2xl mt-10 md:mt-0">Contact</h6>
            <a href="#" className="mt-5 block text-sm text-gray-200">
              Lok Kalyan Samiti Sucheta Bhawan (Near ITO), 11-A,Vishnu Digamber
              Marg, New-Delhi – 110002
            </a>
            <a href="" className="mt-2 block text-sm text-gray-200">
              info@lokkalyansamiti.org
            </a>
            <a href="" className="mt-2 block text-sm text-gray-200">
              011-23235505/0685/4564
            </a>
            <div className="flex items-center gap-5 mt-5">
              <FiTwitter size={20}/>
              <FaInstagram size={20} />
              <RiFacebookCircleLine size={20} />
              <FaLinkedinIn size={20} />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <p className="text-center text-white bg-zinc-900 py-5">
        © 2025 Lok Kalyan Samiti. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
