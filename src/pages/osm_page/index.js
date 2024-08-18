import React, { useState } from 'react';
import Textbox from '../../components/textbox/textbox';
import Button from '../../components/button/button';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function OSM() {
    const [accessPage,setAccessPage] = useState("signin");
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData?.email==='osm.cghrmc@gmail.com' && formData?.password === "osm123"){
            setAccessPage("isc");
        }
        else{
            Swal.fire("Login Failed", JSON.stringify(formData), "error");
        }
    };
    if(accessPage === "signin") 
        return (
        <div className="max-w-lg w-full h-full mx-auto py-8">
            <div 
                style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white rounded-lg shadow-xl overflow-hidden border"
            >

<div className="p-8">
                    <h2 className="text-center text-3xl font-extrabold text-gray-700">
                        Welcome Back
                    </h2>
                    <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
                    <form method="POST" action="#" className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <Textbox
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                value={formData?.email}
                                onChange={value => setFormData({ ...formData, email: value })}
                            />
                            <Textbox
                                required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formData?.password}
                                onChange={value => setFormData({ ...formData, password: value })}
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
                                <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <span
                                    className="font-medium text-indigo-500 hover:text-indigo-400"
                                >
                                    Forgot your password?
                                </span>
                            </div>
                        </div>

                        <Button type={"submit"}>Sign In</Button>
                    </form>
                </div>
                <div className="px-8 py-4 bg-gray-300 text-center">
                    <span className="text-gray-400">Don't have an account?</span>
                    <Link className="font-medium text-indigo-500 hover:text-indigo-400" to={'/sign-up'}>
                        Sign up
                    </Link>
                </div>
                
            </div>
            
            
        </div>
    );

    if(accessPage === 'isc')
        return (
    <div className='w-full h-full'>
        <iframe
                src={`${process.env.PUBLIC_URL}/assets/excel_files/ISC.pdf`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Excel Viewer"
            ></iframe>
            <div className='px-4 py-2'>
                <Button onClick={()=>setAccessPage("signin")}>Signout</Button>
            </div>
            
    </div>)
            
            
}