import {signIn, signOut, useSession} from "next-auth/react";

export default function Reports() {
    const {data: session} = useSession();
    console.log(session);
    if (session && session.user) {
        return (
            <>
                Welcome {session.user.email} <br/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <> Not signed in <br/>
            <button className={"m-2 p-2 bg-slate-200"} onClick={() => signIn()}>Sign in</button>
        </>
    );
}