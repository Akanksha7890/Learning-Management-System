import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = ({ text, name, image, rating, role }) => {

  return (

    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out max-w-sm w-full">

      {/* ⭐ Rating Stars */}

      <div className="flex items-center mb-4 text-yellow-400">

        {Array(5)
          .fill(0)
          .map((_, i) => (

            <span key={i} className="text-lg">

              {i < rating ? <FaStar /> : <FaRegStar />}

            </span>

          ))}

      </div>

      {/* 💬 Review Text */}

      <p className="text-gray-700 text-base leading-relaxed mb-6 italic">

        “{text}”

      </p>

      {/* 👤 Reviewer Info */}

      <div className="flex items-center gap-3">

        {/* SAFE IMAGE FIX */}

        {image?.trim() ? (

          <img
            src={image}
            alt={name || "user"}
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />

        ) : (

          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">

            {name?.charAt(0)}

          </div>

        )}

        <div>

          <h4 className="font-semibold text-gray-900 text-base">

            {name}

          </h4>

          <p className="text-sm text-gray-500">

            {role}

          </p>

        </div>

      </div>

    </div>
  );
};

export default ReviewCard;