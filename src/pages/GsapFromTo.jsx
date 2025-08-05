import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {

 useGSAP( () => {
    gsap.fromTo("#red-box", 
    {
      y: 200,
      x: 0,
      rotation: 0,
      scale: 1,
      borderRadius: "30%",
      boxShadow: "0px 0px 30px lightgreen",
      backgroundColor: "lightgreen",
    },
    {
      y: 0,
      duration: 2,
      x: 700,
      rotation: 360,
      yoyo: true,
      scale: 2.5,
      borderRadius: "50%",
      boxShadow: "0px 0px 20px red",
      repeat: -1,
      repeatDelay: 0.5,
      ease: "bounce.inOut",
      backgroundColor: "red",
    })
  } )


  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
