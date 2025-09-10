import React from 'react'
import Image from 'next/image';
import { partnership1, partnership2 } from '@/common/assets/images';

function Partnership() {
    return (
        <div className='py-[48px] lg:py-[100px]'>
            <div className="container">
                <div>
                    <Image src={partnership1} alt="Partnership 1" />
                    <h2 className='text-[#122D46] text-xl lg:text-[40px] font-extrabold ff_telegraf mt-[-10px] lg:mt-[-50px]'>Enhanced Security Assurance with Bouvet Partnership</h2>
                    <p className='text-base text-[#122D46] font-light mt-4'>Barricade takes the integrity and security of our products and services seriously, which is why we`ve engaged Bouvet, a renowned third-party security firm, to conduct comprehensive security assessments. This partnership with Bouvet ensures an unbiased evaluation of our security measures, reinforcing our commitment to maintaining the highest standards of protection for our clients. Bouvet`s rigorous testing and analysis provide an external perspective that is crucial for identifying potential vulnerabilities and enhancing our security posture. This collaboration not only underscores our dedication to transparency and accountability but also strengthens our resolve to offer solutions that are not just innovative but are verified secure by trusted industry experts. Through this strategic initiative, we reaffirm our promise to deliver excellence and peace of mind to our customers, knowing their operations are safeguarded by state-of-the-art, independently verified security practices.</p>
                </div>
                <div className='pt-[48px] lg:pt-[150px]'>
                    <Image src={partnership2} alt="Partnership 2" />
                    <h2 className='text-[#122D46] text-xl lg:text-[40px] font-extrabold ff_telegraf mt-[-30px] lg:mt-[-100px]'>Microsoft Azure</h2>
                    <p className='text-base text-[#122D46] font-light mt-4'>Barricade chooses Microsoft Azure as the cornerstone of our data security strategy due to its robust, enterprise-grade security features that align with our commitment to safeguarding the data of both our company and our customers. Azure`s comprehensive set of compliance certifications and built-in security controls provide an advanced protection layer against a wide range of digital threats, ensuring the integrity, confidentiality, and availability of data. Leveraging Azure`s global network of secure data centers, we benefit from their state-of-the-art encryption, threat detection, and identity management solutions, allowing us to focus on innovating and delivering high-quality products while resting assured that our data security needs are met at the highest standards. This strategic choice reflects our dedication to employing leading technologies to protect sensitive information, reinforcing our promise to our customers that their data is in safe hands with Barricade.</p>
                </div>
            </div>
        </div>
    )
}

export default Partnership
