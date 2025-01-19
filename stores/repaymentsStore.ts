import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      purchasePrice: 1_500_000,
      deposit: 100_000,
      monthlyServiceFee: 69,
      interestRate: 11.25,
      repaymentPeriod: 30,
      setPurchasePrice: (value) => set({ purchasePrice: value }),
      setDeposit: (value) => set({ deposit: value }),
      setMonthlyServiceFee: (value) => set({ monthlyServiceFee: value }),
      setInterestRate: (value) => set({ interestRate: value }),
      setRepaymentPeriod: (value) => set({ repaymentPeriod: value }),
    }),
    {
      name: 'repayments-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
