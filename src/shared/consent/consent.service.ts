import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Decision = 'granted' | 'denied';

interface ConsentState {
  decisions: Record<string, Decision>;
}

const STORAGE_KEY = 'consent.v1';

@Injectable({ providedIn: 'root' })
export class ConsentService {
  private state$ = new BehaviorSubject<ConsentState>({ decisions: this.readFromStorage() });

  private readFromStorage(): Record<string, Decision> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw) as ConsentState;
      if (parsed && parsed.decisions && typeof parsed.decisions === 'object') {
        return parsed.decisions;
      }
      return {};
    } catch {
      return {};
    }
  }

  private writeToStorage(state: ConsentState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }

  decisions$ = this.state$.asObservable();

  isDecided(category: string): boolean {
    const { decisions } = this.state$.value;
    return category in decisions;
  }

  isGranted(category: string): boolean {
    const { decisions } = this.state$.value;
    return decisions[category] === 'granted';
  }

  grant(category: string) {
    this.setDecision(category, 'granted');
  }

  deny(category: string) {
    this.setDecision(category, 'denied');
  }

  revoke(category: string) {
    const state = this.state$.value;
    const { [category]: _, ...rest } = state.decisions;
    const next: ConsentState = { decisions: rest };
    this.state$.next(next);
    this.writeToStorage(next);
  }

  private setDecision(category: string, decision: Decision) {
    const state = this.state$.value;
    const next: ConsentState = { decisions: { ...state.decisions, [category]: decision } };
    this.state$.next(next);
    this.writeToStorage(next);
  }
}

