
import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
    return <>
    <Card>
        <div>
            Notifications Page
        </div>
        <div className="border border-black">
            <Link className="text-blue-400 font-bold href" href="/complex-dashboard/archived">Archived Notification</Link>
        </div>
    </Card>
    </>;
}