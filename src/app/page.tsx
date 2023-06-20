import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Link href="/dashboard">
        <div className="navbar bg-base-100 justify-center">
          <p className="btn btn-ghost normal-case text-xl">Dashboard</p>
        </div>
      </Link>
    </>
  );
};

export default HomePage;
