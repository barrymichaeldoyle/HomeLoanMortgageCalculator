import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_LOAN_TERM_ZA,
  DEFAULT_MONTHLY_REPAYMENTS_ZA,
  DEFAULT_INTEREST_RATE_ZA,
  DEFAULT_MONTHLY_SERVICE_FEE_ZA,
  DEFAULT_DEPOSIT_ZA,
} from '@/constants/constants';

interface AffordabilityState {
  monthlyRepayments: number;
  deposit: number;
  monthlyServiceFee: number;
  interestRate: number;
  repaymentPeriod: number;
  setMonthlyRepayments: (value: number) => void;
  setDeposit: (value: number) => void;
  setMonthlyServiceFee: (value: number) => void;
  setInterestRate: (value: number) => void;
  setRepaymentPeriod: (value: number) => void;
}

export const useAffordabilityStore = create<AffordabilityState>()(
  persist(
    (set) => ({
      monthlyRepayments: DEFAULT_MONTHLY_REPAYMENTS_ZA,
      deposit: DEFAULT_DEPOSIT_ZA,
      monthlyServiceFee: DEFAULT_MONTHLY_SERVICE_FEE_ZA,
      interestRate: DEFAULT_INTEREST_RATE_ZA,
      repaymentPeriod: DEFAULT_LOAN_TERM_ZA,
      setMonthlyRepayments: (value) => set({ monthlyRepayments: value }),
      setDeposit: (value) => set({ deposit: value }),
      setMonthlyServiceFee: (value) => set({ monthlyServiceFee: value }),
      setInterestRate: (value) => set({ interestRate: value }),
      setRepaymentPeriod: (value) => set({ repaymentPeriod: value }),
    }),
    {
      name: 'affordability-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        monthlyRepayments: state.monthlyRepayments,
        deposit: state.deposit,
        monthlyServiceFee: state.monthlyServiceFee,
        interestRate: state.interestRate,
        repaymentPeriod: state.repaymentPeriod,
      }),
    }
  )
);
