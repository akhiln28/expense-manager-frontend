import {Layout} from "../components/Layout";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Account = () => {
    const {data: session} = useSession({required: true});
    if (session && session.user) {
        const image = session.user.image || "Not found";
        const userEmail = session.user.email || "Not found";
        return (
            <Layout metadata={undefined}>
                <div className={"flex flex-row m-4 p-2 bg-white rounded-xl shadow-md"}>
                    <Image className={"rounded-full"} src={image} alt={userEmail} width={100} height={100}/>
                    <div className={"m-2 p-2 text-slate-600"}>
                        Welcome {session.user.email} <br/>
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                </div>
            </Layout>
        )
    }
    return (
            <div className="flex mx-auto justify-center">
                <div className="p-4 text-xl">You are not signed in</div>
            </div>
    );
}

export default Account;