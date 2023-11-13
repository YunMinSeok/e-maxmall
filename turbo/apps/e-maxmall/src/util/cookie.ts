"use client";
import { destroyCookie, parseCookies, setCookie as SetCookie } from "nookies";
import type { GetServerSidePropsContext, NextPageContext } from "next";

// 쿠키 세팅
export const setCookie = (key: string, value: string, ctx?: GetServerSidePropsContext) => {
  if (ctx) {
    SetCookie(ctx, key, value);
  } else {
    SetCookie(null, key, value);
  }
};

// 쿠키 가져오기
export const getCookie = (key: string, ctx?: GetServerSidePropsContext | NextPageContext) => {
  if (ctx) {
    const cookie = parseCookies(ctx);
    return cookie[key];
  }

  const cookie = parseCookies();
  return cookie[key];
};

// 쿠키 삭제
export const removeCookie = (key: string, ctx?: GetServerSidePropsContext) => {
  if (ctx) {
    destroyCookie(ctx, key);
  } else {
    destroyCookie(null, key);
  }
};
