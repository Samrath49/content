import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import women from "../../assets/images/woman.jpg";
import man from "../../assets/images/man.jpg";
import kid from "../../assets/images/kid.jpg";

{
  /* <Link
                      to={`/lottery/${lottery.lotteryContract}`}
                      key={lottery.lotteryContract}
                    ></Link> */
}

const blogsData = [
  {
    title: "Lorem Ipsum",
    img: women,
    id: "/bl1",
    description:
      "Voluptates harum aliquam totam, doloribus eum impedit atque!\
      Temporibus..",
  },
  {
    title: "Lorem Ipsum",
    img: man,
    id: "/bl2",
    description:
      "Voluptates harum aliquam totam, doloribus eum impedit atque!\
    Temporibus..",
  },
  {
    title: "Lorem Ipsum",
    img: kid,
    id: "/bl3",
    description:
      "Voluptates harum aliquam totam, doloribus eum impedit atque!\
    Temporibus..",
  },
  {
    title: "Lorem Ipsum",
    img: women,
    id: "/bl3",
    description:
      "Voluptates harum aliquam totam, doloribus eum impedit atque!\
    Temporibus..",
  },
  {
    title: "Lorem Ipsum",
    img: man,
    id: "/bl3",
    description:
      "Voluptates harum aliquam totam, doloribus eum impedit atque!\
    Temporibus..",
  },
];

const Blogs = () => {
  return (
    <div className="py-16 bg-gradient-to-br h-screen from-yellow-50 to-red-100">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <span className="block w-max mx-auto px-3 py-1.5 border border-yellow-200 rounded-full bg-yellow-100 text-yellow-700">
            Blogs
          </span>
          <h2 className="text-2xl text-yellow-900 font-bold md:text-4xl">
            A few of the top blogs
          </h2>
          <p className="lg:w-6/12 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur at quam debitis repellat qui asperiores, animi ab fugiat
            est.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogsData.map((card, index) => (
            <Fragment key={index}>
              <div className="relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50"
                  ></div>
                  <img
                    src={`${card.img}`}
                    alt="art cover"
                    loading="lazy"
                    width="1000"
                    height="667"
                    className="h-64 w-full object-cover rounded-t-lg transition duration-500 group-hover:rounded-t-xl"
                  />
                </div>
                <div className="relative space-y-4 -mt-20 p-4">
                  <h4 className="text-2xl font-semibold text-yellow-900">
                    {card.title}
                  </h4>
                  <p className="text-gray-600">{card.description}</p>
                </div>
                <a
                  href="#"
                  className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                >
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 flex border border-yellow-200 rounded-full"
                  >
                    <svg
                      aria-hidden="true"
                      width="24"
                      height="24"
                      fill="none"
                      className="my-auto mx-auto flex-none text-yellow-700"
                    >
                      <path
                        d="M10.75 8.75l3.5 3.25-3.5 3.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <Link to={card.id}>
                    <span className="text-yellow-600">Read more</span>
                  </Link>
                </a>
              </div>
            </Fragment>
          ))}
          <div className="mt-10 mb-20">
            <Link to={"./new"}>
              <button className="flex flex-1 items-start m-auto align-middle font-bold group hover:text-slate-500">
                <svg
                  width="34"
                  height="34"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
                </svg>
                {" Add new"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
