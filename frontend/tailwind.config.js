/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Presentation', 'sans-serif'],
      },
      colors: {
        // 브랜드 메인
        primary: '#2970FF', // 버튼, 주요 포인트
        primaryLight: '#E6F0FF', // 파란색 강조 배경, 탭, 테두리

        // 경고 / 강조
        danger: '#FF4D4D', // 잘못된 입력, 경고
        warning: '#FEE500', // 카카오 버튼
        success: '#22C55E', // 필요 시 사용

        // 텍스트 컬러
        text: {
          base: '#222222', // 기본 텍스트
          muted: '#6B7280', // 설명 텍스트
          light: '#9CA3AF', // placeholder
        },

        // 배경
        background: {
          base: '#FFFFFF',
          soft: '#F9FAFB', // 페이지 배경
        },

        // 보더
        border: {
          base: '#E5E7EB',
        },
      },

      borderRadius: {
        card: '1.25rem', // 카드는 대부분 둥글게
      },

      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.06)', // 카드 느낌
        card: '0 4px 12px rgba(0,0,0,0.08)',
      },

      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
        28: '1.75rem',
        32: '2rem',
      },
    },
  },
  plugins: [],
};
