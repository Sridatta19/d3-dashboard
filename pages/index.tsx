import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen justify-center items-center my-12 md:mt-24 max-w-7xl mx-auto px-8 md:px-16 lg:px-12 space-y-6">
        <div className="">
          <h1 className="text-4xl text-gray-900 font-exo">Analysis</h1>
          <p className="text-sm text-gray-400 font-quattro">
            Welcome to Analytics Dashboard
          </p>
        </div>
        <div className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full h-full">
          <div className="bg-sky-200 h-64 shadow-md hover:shadow-2xl"></div>
          <div className="bg-sky-200 h-64 shadow-md hover:shadow-2xl"></div>
          <div className="bg-sky-200 h-64 shadow-md hover:shadow-2xl md:col-span-2"></div>
          <div className="bg-sky-200 h-64 shadow-md hover:shadow-2xl md:col-span-2 xl:col-span-3"></div>
          <div className="bg-sky-200 h-64 shadow-md hover:shadow-2xl"></div>
        </div>
      </div>
    </Layout>
  );
}
