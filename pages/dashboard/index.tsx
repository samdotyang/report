import { CardDoughnutChart } from "@components/Cards/CardDoughnutChart";

export default function Dashboard({ data }: any) {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        DASHBOARD
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:3000/api/case`);
  const data = await res.json();
  return { props: { data } }
}
