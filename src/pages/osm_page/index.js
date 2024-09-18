import React, { useState } from "react";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import FillUp from "./components/fillup";
import GoogleSheetData from "./components/googlesheetdata";
import Fillup2 from "./components/fillup2";

export default function OSM() {
  const [activeTab, setActiveTab] = useState("viewList");
  const [accessPage, setAccessPage] = useState("signin");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData?.email === "osm.cghrmc@gmail.com" &&
      formData?.password === "osm123"
    ) {
      setAccessPage("isc");
    } else {
      Swal.fire("Login Failed", "Invalid Access", "error");
    }
  };
  if (accessPage === "signin")
    return (
      <div className="w-full h-full mx-auto py-8 px-4">
        <div className="h-full mx-auto flex-row md:flex md:space-y-0 space-y-2 space-x-0 md:space-x-2 max-w-2xl">
          <div
            style={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-white rounded-lg shadow-xl flex-1 overflow-hidden">
            <div className="p-8">
              <h2 className="text-center text-3xl font-extrabold text-gray-700">
                Welcome Back
              </h2>
              <p className="mt-4 text-center text-gray-400">
                Sign in to continue
              </p>
              <form
                method="POST"
                action="#"
                className="mt-8 space-y-6"
                onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm space-y-4">
                  <Textbox
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={formData?.email}
                    onChange={(value) =>
                      setFormData({ ...formData, email: value })
                    }
                  />
                  <Textbox
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData?.password}
                    onChange={(value) =>
                      setFormData({ ...formData, password: value })
                    }
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                    />
                    <label
                      className="ml-2 block text-sm text-gray-400"
                      htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <span className="font-medium text-indigo-500 hover:text-indigo-400">
                      Forgot your password?
                    </span>
                  </div>
                </div>

                <Button type={"submit"}>Sign In</Button>
              </form>
            </div>
            <div className="px-8 py-4 bg-gray-300 text-center mt-20">
              <span className="text-gray-400">Don't have an account?</span>
              <Link
                className="font-medium text-indigo-500 hover:text-indigo-400"
                to={"/sign-up"}>
                Sign up
              </Link>
            </div>
          </div>
          {/* <div className="flex-1 rounded-md shadow-md">
            <FillUp />
          </div> */}

        </div>
        <div className="mt-8"></div>

      </div>
    );

  if (accessPage === "isc")
    return (
      <div className="w-full">
        {/* Tab Buttons */}
        <div className="flex justify-between items-center space-x-4 p-4 border-b border-gray-300">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 ${activeTab === "viewList" ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
              onClick={() => setActiveTab("viewList")}
            >
              View List
            </button>
            <button
              className={`px-4 py-2 ${activeTab === "fillup" ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
              onClick={() => setActiveTab("fillup")}
            >
              Fillup
            </button>
          </div>
          {/* Signout Button */}
          <Button onClick={() => setAccessPage("signin")}>Signout</Button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "viewList" ? (
            <GoogleSheetData />
          ) : (
            <Fillup2 />
          )}
        </div>
      </div>
    );


}
