import React from "react";

import NaverIcon from "@/assets/png/naver-icon.png";
import FacebookIcon from "@/assets/png/facebook-icon.png";
import InstagramIcon from "@/assets/png/instagram-icon.png";

const contacts: string[] = [
  "©2020-2021 what happened corp",
  "(주) 왓헤픈",
  "대표자: 홍길동",
  "사업자 등록번호 : 356-00-00000",
  "test0101@what happened.co.kr",
  "서울특별시 강남구 도산대로 8길 17",
  "FAX: 070-0000-0000",
  "서비스 이용약관",
  "개인정보처리방침",
];

export const Footer = () => {
  return (
    <div className="flex w-full flex-col justify-center p-4">
      <div className="flex flex-col items-start justify-between gap-10 border-t bg-background py-6 text-foreground lg:flex-row">
        <FooterColumn
          label="what happened"
          items={[
            "[공지] 개인 정보 처리 방침 변경 사전 안내",
            "[공지] 29CM 강남 스토어 영업 종료",
            "[공지] 개인 정보 처리 방침 변경 사전 안내",
            "[공지] iOS 10 이하 버전 지원 중단 안내",
            "[공지] 개인 정보 처리 방침 변경 사전 안내",
          ]}
        />

        <div className="grid grid-cols-2 items-start justify-center gap-10 lg:grid-cols-4 lg:gap-20">
          <FooterColumn
            label="about us"
            items={["회사 소개", "인재 채용", "상시 할인 혜택"]}
          />
          <FooterColumn
            label="my order"
            items={[
              "내 주문",
              "주문 배송",
              "취소 / 교환 / 반품 내역",
              "상품 리뷰 내역",
              "증빙 서류 발급",
            ]}
          />
          <FooterColumn
            label="my account"
            items={[" 회원 정보 수정", "회원 등급", "마일리지 현황", "쿠폰"]}
          />
          <FooterColumn
            label="help"
            items={[
              "1:1 상담 내역",
              "상품 Q&A 내역",
              "공지 사항",
              "자주하는 질문",
              "고객의 소리",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 border-t bg-background py-6 text-foreground/70 lg:flex-row">
        <div className="flex w-full flex-wrap items-center gap-2 text-xs lg:w-1/2">
          {contacts.map((item, index) => (
            <React.Fragment key={`${item}_${index}`}>
              <span>{item}</span>
              <Separator />
            </React.Fragment>
          ))}
        </div>
        <div className="mr-10 flex items-center gap-4">
          <img
            src={NaverIcon}
            alt="naver-icon"
            className="h-6 w-6 cursor-pointer object-cover hover:opacity-75"
          />
          <img
            src={FacebookIcon}
            alt="facebook-icon"
            className="h-6 w-6 object-cover hover:opacity-75"
          />
          <img
            src={InstagramIcon}
            alt="instagram-icon"
            className="h-6 w-6 object-cover hover:opacity-75"
          />
        </div>
      </div>
    </div>
  );
};

interface FooterColumnProps {
  label: string;
  items: string[];
}

const FooterColumn = ({ label, items }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2 text-sm lg:text-base">
      <span className="font-bold">{label}</span>
      <div className="lg flex flex-col items-start gap-1 text-xs">
        {items.map((item, index) => (
          <span
            className="cursor-pointer hover:underline"
            key={`${item}_${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Separator = () => {
  return <div className="h-4 border-r border-gray-300" />;
};
