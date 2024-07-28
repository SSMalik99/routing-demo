
import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return <>
    <Card>
        <div>
            Archived Notifications Page
        </div>
        <div className="border border-black">
            <Link className="text-blue-400 font-bold" href="/complex-dashboard/">Default Notification</Link>
        </div>
    </Card>
    </>;
}