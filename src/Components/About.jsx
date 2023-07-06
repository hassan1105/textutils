import React from "react";

const About = (props) => {
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="text-center ">About Us</h1>
        <h3 className="text-center">
          Welcome to our Text Utils website! We're thrilled to have you here.
        </h3>
        <div
          className="conatiner p-4"
          style={{
            backgroundColor: props.mode === "dark" ? "#212529" : "#f8f9fa",
          }}
        >
          <p>
            At Text Utils, we believe in the power of simplicity and efficiency
            when it comes to handling your text-related needs. Whether you're a
            writer, student, or simply someone who loves playing with words, our
            website is designed to make your life easier. Need to convert your
            text to uppercase or lowercase? No problem! With just a click of a
            button, you can effortlessly transform your text to suit your
            desired case. Whether you're looking to make a bold statement or
            maintain a subtle tone, we've got you covered. Copying and pasting
            text has never been smoother. With our intuitive interface, you can
            quickly duplicate your text and transfer it to any application or
            document. Say goodbye to tedious manual copying and embrace the
            efficiency of our streamlined process. But that's not all. We
            understand the value of time, and that's why we provide you with
            tools to analyze your text's length, including word count and
            character count. Need to know how long it'll take to read your
            document? Our time-to-read feature will give you an estimate,
            allowing you to plan your schedule accordingly. Text Utils is
            designed to be your go-to platform for all your text-related tasks.
            We're committed to simplicity, accuracy, and saving you valuable
            time. Our user-friendly website ensures a hassle-free experience,
            empowering you to focus on what truly matters: your content. So,
            dive into the world of Text Utils and unlock the potential of your
            text like never before. We're here to help you make the most of your
            words, one click at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
