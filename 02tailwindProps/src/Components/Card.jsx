import React from "react";

const Card = ({text,name}) => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://th.bing.com/th/id/R.5c1cb9376b3bee7effa4286fbc6ef4ba?rik=KimYjCSDB1u4jg&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fawesome-beautiful-nature-wallpaper_042319501_304.jpg&ehk=8bGUOKnA5IrfEG%2foi23atcc7xm8BmgDPkLvJhn94JwA%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
             {text}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
             {name}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
