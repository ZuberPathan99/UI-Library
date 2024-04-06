"use client"
import Button from "./components/Button/Button";
import Accordion from './components/Accordion/Accordion';

const accordionItems = [
  { title: 'Section 1', content: <p>Content for Section 1</p> },
  { title: 'Section 2', content: <p>Content for Section 2</p> },
  { title: 'Section 3', content: <p>Content for Section 3</p> },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
     <Button variant="green">Approve</Button>
     <Button variant="red">Delete</Button>
     </div>
     <Accordion items={accordionItems} />
    </main>
  );
}
