import { prisma, PrismaClient } from "@prisma/client";
export default function Db(props){
    return (
        <div>
            データベースには「{props.name}と{props.memo}」が入っています。
        </div>
    );
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();

    const result = await prisma.users.findMany();

    return {
        props:{
            name:result[0].name,
            memo:result[0].memo
        }
    };
}