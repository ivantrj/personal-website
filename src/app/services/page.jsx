   import { SimpleLayout } from '@/components/SimpleLayout'
   import { Card } from '@/components/Card'

   export const metadata = {
     title: 'Services',
     description: 'Explore the services I offer as a freelance developer.',
   }

   export default function Services() {
     return (
       <SimpleLayout
         title="My Freelance Services"
         intro="I offer a range of services to help you bring your ideas to life."
       >
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
           <Card>
             <Card.Title>Web Development</Card.Title>
             <Card.Description>
               Custom websites built with modern technologies.
             </Card.Description>
           </Card>
           <Card>
             <Card.Title>Mobile App Development</Card.Title>
             <Card.Description>
               Cross-platform apps for iOS and Android using Flutter.
             </Card.Description>
           </Card>
           <Card>
             <Card.Title>Consultation</Card.Title>
             <Card.Description>
               Expert advice on your tech projects and strategies.
             </Card.Description>
           </Card>
         </div>
       </SimpleLayout>
     )
   }