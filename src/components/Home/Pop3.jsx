"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { base_url } from "../Helper/helper";

export default function Popup3({ data }) {
    const [visible, setVisible] = useState(false);
    const [showClose, setShowClose] = useState(false);


    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), 8000);
        const closeTimer = setTimeout(() => setShowClose(true), 11000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(closeTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
            <div className="relative min-w-[65%] flex justify-center  rounded-2xl overflow-hidden">

                {showClose && (
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute cursor-pointer top-3 right-10 z-20 bg-white/80 hover:bg-white rounded-full p-1 transition"
                    >
                        <X size={20} className="text-black" />
                    </button>
                )}

                <Link
                    href={
                        data.linkArray && data.linkArray[0]
                            ? data.linkArray[0]
                            : 'https://spectrum.gotrackier.com/click?campaign_id=1201&pub_id=945&source=%7B2%7D'
                    }
                    target="_blank"
                    className="relative"
                >

                    {
                        data.images[0] ? (<> <img
                            src={`${base_url}${data.images[0]}`}
                            alt="Popup"
                            className=" hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
                        /></>) : (<> <img
                            src="/image1.png"
                            alt="Popup"
                            className="hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
                        /></>)
                    }

                      

                      {
                          data.images[0] && data.images[1] &&(

                            <img
                            src={`${base_url}${data.images[1]}`}
                            alt="Popup"
                            className=" block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl "
                            />
                          )
                      }
                    
                      {
                          data.images[0] && !data.images[1] &&(

                            <img
                            src={`${base_url}${data.images[0]}`}
                            alt="Popup"
                            className=" block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl "
                            />
                          )
                      }
                    
                      {
                          !data.images[0] && !data.images[1] &&(

                            <img
                            src="/image1.png"
                            alt="Popup"
                            className=" block md:hidden h-auto max-h-[60vh] object-contain rounded-2xl "
                        />
                          )
                      }
                    

                   


                </Link>
            </div>
        </div>
    );
}
