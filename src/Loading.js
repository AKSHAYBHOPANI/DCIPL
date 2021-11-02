import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function Loading() {
  useEffect(() => {
    
    NProgress.start();
    NProgress.done();
    return () => {
      
    };
  });

  return "";
}