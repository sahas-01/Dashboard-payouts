import Layout from "@/components/Layout"


export default function Custom404() {
    return (

        <Layout pageTitle="404 - Page Not Found">
            <div className="flex flex-col justify-center items-center my-auto">
                <h1 className="text-black font-semibold text-xl">
                    Oops, the page you are looking for has not been built!
                </h1>
                <h1 className="text-black font-semibold text-xl">
                    Would love to build these pages nevertheless. <span className="text-cyan-500">(once hired of course :P)</span>
                </h1>
            </div>
        </Layout>
    );
}