import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="navbar bg-base-100 justify-center">
        <Link href="/dashboard">
          <p className="btn btn-ghost normal-case text-xl">Dashboard</p>
        </Link>
        <Link href="/firebase">Firebase Connection</Link>
      </div>
    </>
  );
};

export default HomePage;
