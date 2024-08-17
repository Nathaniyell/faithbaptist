"use client"
import Titles from "@/components/titles/Titles"
import AnimatedContainer from "@/components/utils/AnimatedContainer"
import Image from "next/image"
import schoolBuilding from "../../../public/faithbaptist/school-building.jpg"
import schoolChildren from "../../../public/faithbaptist/faith12.jpg"
import Staff from "@/components/staff/Staff"
import { useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <main className="bg-blue-50">
      <h1 className="text-4xl font-semibold p-10 text-center bg-rose-200">About Us</h1>

      <section className="flex-col flex gap-6 py-6">
        <div className="w-11/12 mx-auto">
        <h3 className="font-semibold text-3xl text-primary text-center mb-4">The Best Nursery/Primary Education Rivers State</h3>
         
          <AnimatedContainer className="mt-4 flex flex-col lg:flex-row gap-10 justify-between w-full">
            <Image src={schoolBuilding} alt="About our School" className="rounded-md lg:w-2/5 lg:h-[32rem] brightness-70" />

            <p className="leading-loose">Welcome to Faith Baptist Nursery and Primary School. In our mind, Schools are meant to be citadels of learning where good moral training, discipline and the fear of God are expected to be inculcated in the pupils. The School Management Board, PTA, and Staff are committed to new innovative teaching methods and the highest possible educational provision by utilizing various physical and virtual learning environments to support pupils learning. <br />
              We are very proud because our parents are the best in the world and with their consistent support; they have contributed in various ways to the success of our dear school. We work as a team for a common goal, to make sure that our children remain happier and achieve good success in their primary levels. In addition, our pupils find themselves in a serene warm, caring, nurturing environment which is child- centered and dedicated to helping them attain the highest academic standards. <br />
              Without any doubt an excellent School offering a well-round education. We are very proud that our children are doing well in reading, writing, spelling, and French language, mathematics, Creative Art, ICT, Competition and many more. With the introduction of various activities in the school makes a home away from home the pupils in order to achieve the vision of the school which is to produce pupils for future used. The activities career talk, Sports, Clubs, etc. Therefore, this School is the best for you, assuring you the best quality service.
            </p>
          </AnimatedContainer>
        </div>

        <AnimatedContainer className="flex flex-col gap-4 items-center bg-red-50 py-4">
          <h3 className="font-semibold text-3xl text-primary mb-4">School Anthem</h3>
          <div className="leading-loose flex flex-col md:flex-row gap-6 w-11/12 lg:w-10/12 mx-auto">
            <p>Faith Baptist church Port Harcourt group of schools. <br />
              We preach the life from the real of mind of God
              Rising like eagles where the mind leads going, A place that shines and sparkles like diamond <br />
              Is a child of God with quality wisdom Jesus author and finisher of our faith, <br />
              I’m proud to be a faith Baptist Pupil  <br />
              The Golden Excellent that worth money spent trained in faithful land to reach the world  <br />
              A true citizen leads Nigeria Country.
            </p>
            <Image src={schoolChildren} alt="About our School" className="brightness-70 rounded-md" />
          </div>

        </AnimatedContainer>

        <AnimatedContainer className="flex flex-col gap-4 items-center bg-white py-6">
        <h3 className="font-semibold text-3xl text-primary mb-4">Our Expert Staff</h3>
          <Staff />
        </AnimatedContainer>
        <AnimatedContainer className="w-11/12 mx-auto">
        <h3 className="font-semibold text-3xl text-primary text-center mb-4">History about our school</h3>
        
          <p  className={`leading-loose ${isVisible ? "" : "line-clamp-6"}`}>The idea for the establishment of Faith Baptist Nursery/Primary School (formerly called First Baptist Nursery/primary School Diobu, PHC.) was first introduced in 1982 by the then Minister in-charge of Faith Baptist Church Port Harcourt, Late Rev. Godspower O. Isaiah.   This idea was accepted by the church and   consequently, a committee was set up for the take off and running of the school. The chairman of the committee was Late Lt. Commander Ogunike.  However, due to the nature of his  job as a military man, he found it increasingly difficult to combine both jobs.  Therefore, Mr. Clement Goin stepped into his shoes and hence was been regarded as the first chairman of the school committee.  <br />

            The fundamental aim of establishing the school was mission.  That is, to inculcate the fear of God early in the hearts of children and reach the parents and guardians through the children and school activities.  Another basic aim for the establishment of the school was to create job opportunities for the unemployed members of the church.  <br />

            Following the above aims, the school started with a Pre-Nursery class on March 1, 1982 with a total population of thirty three pupils and three staff including the Headmistress.  However, the appointed acting Headmistress (a Ghanaian) resigned after few weeks of the take off of the school due to health reasons.  Consequently, Mrs. Fidelia Briggs was saddled with her responsibilities.  The school grew very fast in population such that by the next term, it had two classes with ninety pupils. <br />

            By 1983, Mrs. Stella Owubokiri was appointed the Headmistress.  She served in that capacity till August 1985.  Hence, she was been regarded as the first substantive head of the school.  On her resignation, Mr. Godspower Umor became the Headmaster in September, 1985.  On 28th September, 1987 the final inspection for the approval of the school was conducted by the state Ministry of Education and on 14th March 1988, the nursery school which began with the promotion of the pre-nursery pupils into nursery was fully approved.   <br />

            After six years of the take off of the nursery school, it was observed that parents and guardians had to seek for primary school admission for their children else where which was not convenient for them. The school’s committee under the chairmanship of Mr. Membere C. Tyger proceeded to commence the primary school.  In September, 1987, the primary school was started with two classes of sixty-five pupils and two teachers.  This made it easier for both the church and parents in their personal goals.  This development resulted in a drastic increase in the population of the school.  By this period, the chairmanship of the school committee from inception has rotated, among the following: Mr. Clement Goin (1982 – 1983), Mr. Mark Dodo (1983 – 1984), Dr. Ebi Dambo (1984 – 1985), Mr. Membere C. Tyger (1985 – 1988) and Barr. E. Igonikon (1988 – 1996) who had the highest number of years to serve and built the storey block of classrooms <br />

            With the resignation of Mr. Godspower Umor in 1993, Rev. Ibiosiya D. Amachree formally known as
            Mr. Ibiosiya D. Amachree took over as the third substantive head of the school in January, 1994.  The school’s population has risen to more than one thousand pupils and had a staff strength of fifty-seven person.  On 8th November, 1996, the primary school was finally approved by the Rivers State Government. <br />


            With the approval of the school, it had good standing and the new school’s committee under the leadership of Dr. Nkem Okoh saw the need to build a befitting structure for the nursery school, the foundation of which was laid in 1998.  In a deliberate bid to achieve the mission aim of establishing the school (ie. building lives in the fear of God) morning assemblies were used to preach and teach the word of God through using the church members.  The staff also had monthly praying and fasting for spiritual upliftment.  After the expiration of the tenure of Dr. Nkem Okoh (now Prof), another school committee headed by Mr. Isobo  A. Jim George was elected in 2000. <br />
            While the population of the school began to decline in this period due to various factors,  like this committee proposed and founded Faith Baptist College in 2001, where Mr. Ibiosiya D. Amachree now Rev. became the first Acting and later substantive principal. <br />

            In 2002, another committee was elected under the chairmanship of Mr. S.E. Onerhime.  The name of the committee was changed to Faith Baptist Church Schools Management Board due to expanded responsibilities assigned to her.  The Board was able to put into use the four classrooms whose  foundation was laid by the committee of Dr. Nkem Okoh.  The Board also laid foundation for another block of four classrooms.  Also, the Board organized the 20th Anniversary and twenty five Million Naira fund Raising program in 2002. <br />

            With the transfer of Mr. Ibiosiya D. Amachree as the principal of the college his assistant, Mrs. Kine Berena was appointed as the fourth head teacher of the Nursery/Primary School in 2002.  She stayed in this position till February 2004 when she resigned.  Consequently, Mr. Samuel O. Wachukwu was appointed acting headmaster on March 1st, 2004.  For his commitment and good performance his appointment as the fifth substantive headmaster was confirmed in September 1st, 2004. <br />

            In January 2005, a new management board was elected under the chairmanship of Mr. E. I. Ndekwu.  This management was able to secure the approval of Faith Baptist College, improved her laboratories and brought to plastering level the four classrooms begun by the previous board.  In January 2007, another Management Board under the chairmanship of Mr. Bra Ogun was elected which focused on staff welfare and infrastructural development.  With the expiration of the tenure of the Board, another schools Management Board was appointed in 2009 headed by Engr. Gabriel Chuku. <br />

            Academically, Faith Baptist Nursery/Primary School Port Harcourt has always shone like stars among equals.  In her external exams, her pupils compete very well and pass with distinctions and credit.  Morally and socially, the school has continued to build in her pupils great virtues of hard work honesty, excellence, and respect that will make them great citizens of the nation. <br />

            On infrastructural development, the School Management board under the leadership of Engr. Gabriel. Chuku is poised more than ever before to transform the infrastructural level of the school.
            With the expiration of the tenure of the Board, another School Management Board was appointed in 2010 by Dr. (Mrs.) O. B. Owei (now Prof.).  For her commitment and good performance, she headed the school the school till 2013.  During her tenure, staff welfare was not left behind as well as other development project as a virtuous woman. <br />

            In 2014, Mr. A.O. Oniyinde was appointed as a Board chairman and during his tenure the present level of infrastructure was raised.  He headed the office till 2015.

            The Board chairman of the school from 2016 till date are: <br />
            Late Prof. Howells Hart 		-	(2016 – 2017) <br />
            Dr. Chika Chuku (Acting chairman)	-	(2018 – 2021) <br />
            Mr. Brother Joshua			-	(2022 – till date) <br />

            Late Mrs. Rachael A. Akinola was appointed as the 6th substantive headteacher and was confirmed on May 3, 2010, she stayed in this position till 2019 when she resigned.
            Consequently, Mrs. Charity Osuigwe was appointed as the 8th and current Head teacher on August2019.  She is known for her commitment to good performance and is the brain behind the uptick in the use of technology in the administration and management of the school, thereby carving a niche for herself in the history of the school
          </p>
          <button
                onClick={(() => setIsVisible(!isVisible))}
                className="text-blue-600 underline !self-start "
              >
                View {isVisible ? "less" : "more"}
              </button>
        </AnimatedContainer>

      </section>
    </main>
  )
}

export default About