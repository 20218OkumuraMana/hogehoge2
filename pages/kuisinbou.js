import { PrismaClient } from '@prisma/client';

export default function kuisinbou(props) {
    return (
        <div>
             {props.users.map((user, index) =>
              <div key={user.name}>
                   {user.name}
             </div>
             )}
        </div>
    );
}

export async function getServerSideProps() {
    const prisma = new PrismaClient();
  
    const result = await prisma.students.findMany({
      where: {
        group_id:15
      }
    });
  
    return {
      props: {
        users: result
      }
    };
  }
  