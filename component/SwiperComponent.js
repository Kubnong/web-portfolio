"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperComponent = () => {
    return (
        <Swiper
            spaceBetween = {50}
            slidesPerView = {1}
            navigation = {true}
            pagination = {{clickable : true}}
            scrollbar = {{draggable : true}}
            className = 'w-[80%]'
            loop = {true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
            <SwiperSlide>
                <div className="flex bg-[#313131e3] items-center p-3 rounded-2xl border-2 border-[#dad4d4] justify-center gap-15 h-145">
                    <Image
                        src="/Awards_kaset.png"
                        width={300}
                        height={100}
                        alt="Cert_Botnoi"
                    />
                    <div className="flex flex-col text-white items-center gap-3">
                        <div className="font-bold text-[30px]">
                            เหรียณเรียนดี
                        </div>
                        <div className="text-[20px]">
                            มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน
                        </div>
                        <div className="text-[18px]">
                            ประจำปีการศึกษา 2565
                        </div>
                        <div className="text-[18px] text-gray-500">
                            เหรียญที่มอบให้สำหรับนักศึกษาที่มีผลการเรียนเฉลี่ยสะสมใน 2 ภาคการศึกษาสูงกว่า 3.50 ขึ้นไป
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex bg-[#313131e3] items-center p-3 rounded-2xl border-2 border-[#dad4d4] justify-center gap-15 h-145">
                    <Image
                        src="/Cert_kaset.jpg"
                        width={600}
                        height={100}
                        alt="Cert_Botnoi"
                    />
                    <div className="flex flex-col text-white items-center gap-2">
                        <div className="font-bold text-[30px]">
                            เกียรติบัตรรางวัลการเรียนดี
                        </div>
                        <div className="text-[20px]">
                            มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน
                        </div>
                        <div className="text-[18px]">
                            ประจำปีการศึกษา 2566
                        </div>
                        <div className="text-[18px] text-gray-500">
                            รางวัลสำหรับผู้ที่มีเกรดเฉลี่ยผลการเรียน 3.50 ขึ้นไป
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent