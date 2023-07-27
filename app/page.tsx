'use client'
import Name from "@/components/Header/name";
import Title from "@/components/Header/title";
import Box from "@/components/SideContent/Box";
import SideContent from "@/components/SideContent/SideContent";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MainContent from "@/components/MainContent/MainContent";
import ContentBox from "@/components/MainContent/ContentBox";

export default function HomePage(){
const contacts = [
  {Icons : LocalPhoneIcon , info:"612-345-6789"},
  {Icons : EmailOutlinedIcon , info:"yourname@email.com"},
  {Icons : PlaceOutlinedIcon , info:"New York ,NY"},


]
  return (
  <>
    <div className="
    border
     bg-white 
     rounded-sm
     md:mx-[15%]
     
     ">
      {/* Name */}
        <Name name={"Name Surname"}/>

        {/* Title */}
        <Title title={" Professional Title"} />
        {/* Wrapper */}
        <div className=" flex mx-3 gap-2 mt-3">
          {/* sidebar */}
          <SideContent>
            <Box>
              <ul className="flex 
              flex-col
              items-start
              space-y-4
              mb-3
              ">
                {
                  contacts.map(contact=> <li key={contact.info} className="flex
                   justify-center items-center
                    gap-3
                    text-pink-500
                    ">
                      {<contact.Icons
                      className="text-pink-600 "/>}{contact.info}
                  </li>)
                }
              </ul>
            </Box>

            <Box>
              <h1 className=" text-xl font-bold ">SUMMARY</h1>
              <p className=" line leading-7 my-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus natus explicabo ratione error pariatur magni nesciunt ex, voluptate rerum dicta dolores quam soluta neque! Ut, repellat repellendus! Repudiandae, aut! Sapiente eius accusamus ipsum explicabo possimus?
              </p>
            </Box>

          </SideContent>
          <MainContent>
            <ContentBox
            key={"contentBox"}
            heading="Heading"
            location="puri"
            subheading="subHeading"
            title="title"
            bulletpoints={["point1" , "point2"]}
            duration="july 19 - 13"
            description="description"
            />
            <ContentBox
            key={"contentBox"}
            heading="Heading"
            location="puri"
            subheading="subHeading"
            title="title"
            bulletpoints={["point1" , "point2"]}
            duration="july 19 - 13"
            description="description"
            />
            
          </MainContent>
          

        </div>
    </div>
   </>
  )
}
