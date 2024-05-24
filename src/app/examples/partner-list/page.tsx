import { PageTitle } from "@/components/page-title";
import { promises as fs } from 'fs';
import { Button } from "@/components/ui/button";
import { columns } from "./colums";
import { DataTable } from "./data-table-partner-list";
import Modals from "../modal";

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/src/app/examples/partner-list/partner-list-data.json', 'utf8');
    const data = JSON.parse(file);
    return(
        <>
            <PageTitle title="Partner's List" />
            <div className="w-[80%]">
                <div className="flex flex-row-reverse mb-5 ">
                    <Modals modalAddDoc={true} />
                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}