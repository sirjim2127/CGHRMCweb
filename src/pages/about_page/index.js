import React from "react";
import Heading from "../../components/typography/heading";
import Content from "../../components/typography/content";
import AnimatedSection from "../../components/animations/animated_section";

export default function AboutPage() {
  return (
    <div className="flex-1 w-full">
      <AnimatedSection animationType="fade-up">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/head_quarters.jpeg`}
          alt={"aboutuscover"}
          className="object-cover relative w-full h-[500px]"
        />
        <div className="p-4">
          <Heading>
            The Coast Guard Human Resource Management Service (CGHRMS)
          </Heading>
          <Content>
            The Coast Guard Human Resource Management Service (CGHRMS) traces
            its roots back to its activation in 2017 pursuant to Headquarters
            Phitipoine Coast Ouard General Order N 335 dated 18 August 2017 as
            an administrative support unit initially established as a part of
            the larger Deputy Chief of Coast Guard Staff for Human Resource
            Management, CG-i, the CGHRMS aimed to provide excellent, timely, and
            expeditious personnel services regarding direction, control, and
            supervision of human resource management or personnel matters within
            the PC organization. Recognizing the importance Of dedicated
            commanincorang CCHRMS was implemented a distinct and separate
            service from CG-1 in 2018 in 2019, the COHRMS took a significant
            step forward by activating the Satellite Training institute (STI).
            This allowed the Command to rovide specialized training and
            development programs human Resource Personnel fostering their
            professional growth and ensuring a skilled workforce within the
            Command
          </Content>
          <Content>
            Building on its success, the CGHRMS underwent a momentous
            transformation in 2020. it was renamed to Coast Guard Human Resource
            Management Command (CHRMC) and expanded its scope of operations. The
            Command activated thirty-tour (34) Human Resource Management Units
            (HRMUS) across the country, establishing a widespread presence to
            cater to the diverse needs of Coast Guardians in different regions
            These units were strategicaily placed to facifitate efficient human
            resource management and meet the requirements of the expanding _PCG
            organization. Likewise, COHRMC assumed administrative and
            operational control of four (4) Special Service Commands. namely,
            Coast Guard Special Services Office (cesso), Coast Guard Gender and
            Development (CGGAD), pension and Gratuity Management Center (POMC),
            and Non-uniformed Personnel Altairs Office (NUPAO).
          </Content>
          <Content>
            in 2021, the CHRMC took another noteworthy step by devolving
            recruitment quotas. This measure aimed to empower regional units to
            have greater control over their recruitment processes, enabling them
            to align with the specific needs and dynamics of their respective
            regions. The devolution of recruitment quotas helped create a more
            localized approach to talent acquisition and management. in 2022 the
            Promotional Examination (PROMEX) was transferred to CHRMC, PROMEX
            was designed to evaluate arid recognize the knowledge, skills, and
            capabilities of Coast Guardians, enabling them to progress in their
            Coast Guard based on merit and performance. in 2023, COHRMC
            officially embarked on its Performance Governance System (POs)
            Transformative Journey through the assistance of the institute for
            Solidarity in Asia (ISA), the exclusive organization providing PGS
            services. On 10 August 2023, the Command us conferred POS Initiated
            Status with Silver Trailblazer Award after successfully designing
            its strategy aimed at becoming An internationally certified HR
            Management Command in support to the mission of PC by 2028. In the
            same year, PGS literally transformed COHRMC as it triggered its
            re-structuring from a linear to hierarchical organization to provide
            emphasis on the identified core functions and support services, This
            reorganization resulted in the establishment of the Career
            Management Center (CMC) and Personnel Management Center (PMC), and
            the transfer of the promotion function and PROMEX to CMC.
            Concurrently, GMC broadened its scope and capabilities, evolving
            into the Retirement and Benefits Administration Service (RBAS).
            Additionally, the Attrition function was transferred to PMC,
            prompting the rebranding of the Procurement and Attrition Division
            as the Human Resource Procurement Center (HRPC), thereby becoming
            the fourth Core Function Unit of CGHRMC alongside CMC, PMC, and
            RBAS. To facilitate this transformation, the Command bolstered its
            internal capacities by renaming its gervice support units. STI was
            renamed as the Human Resource Management School (HRMS), cessO was
            enlarged into the Coast Guard Special Services Center (coSSc), and
            COGAD underwent reform to become the Gender and Development Center
            (GADC). Furthermore, to prioritize automation, the information and
            Technology Center (iTC) was also established as the fifth Service
            Support Unit alongside HRMS, CGSSC, CGGAD, and NUPAO. Throughout its
            brief history, the COHRMC has evolved into a comprehensive and vital
            institution, focusing on the management and development of human
            resources within the PC organization. By streamlining recruitment
            processes, providing specialized training and overseeing the
            administrative and operational aspects of various units, the CGHRMC
            plays a crucial role in ensuring the success and growth in the
            dynamic public service landscape, however, it still seeks to bring
            the Coast Guard organization to a higher level of success in
            delivering service to the whole of the PC that shall radiate to the
            general public.
          </Content>
        </div>
      </AnimatedSection>
    </div>
  );
}
