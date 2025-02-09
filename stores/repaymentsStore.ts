import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_DEPOSIT_ZA,
  DEFAULT_INTEREST_RATE_ZA,
  DEFAULT_LOAN_TERM_ZA,
  DEFAULT_MONTHLY_SERVICE_FEE_ZA,
  DEFAULT_PURCHASE_PRICE_ZA,
} from '@/constants/constants';

interface RepaymentsState {
  purchasePrice: number;
  deposit: number;
  monthlyServiceFee: number;
  interestRate: number;
  repaymentPeriod: number;
  setPurchasePrice: (value: number) => void;
  setDeposit: (value: number) => void;
  setMonthlyServiceFee: (value: number) => void;
  setInterestRate: (value: number) => void;
  setRepaymentPeriod: (value: number) => void;
}

export const useRepaymentsStore = create<RepaymentsState>()(
  persist(
    (set) => ({
      purchasePrice: DEFAULT_PURCHASE_PRICE_ZA,
      deposit: DEFAULT_DEPOSIT_ZA,
      monthlyServiceFee: DEFAULT_MONTHLY_SERVICE_FEE_ZA,
      interestRate: DEFAULT_INTEREST_RATE_ZA,
      repaymentPeriod: DEFAULT_LOAN_TERM_ZA,
      setPurchasePrice: (value) => set({ purchasePrice: value }),
      setDeposit: (value) => set({ deposit: value }),
      setMonthlyServiceFee: (value) => set({ monthlyServiceFee: value }),
      setInterestRate: (value) => set({ interestRate: value }),
      setRepaymentPeriod: (value) => set({ repaymentPeriod: value }),
    }),
    {
      name: 'repayments-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        purchasePrice: state.purchasePrice,
        deposit: state.deposit,
        monthlyServiceFee: state.monthlyServiceFee,
        interestRate: state.interestRate,
        repaymentPeriod: state.repaymentPeriod,
      }),
    }
  )
);
