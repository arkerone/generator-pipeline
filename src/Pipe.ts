type Predicate<TValue> = (value: TValue) => boolean
type Transform<TValue, TReturn> = (value: TValue) => TReturn

export default class Pipe<TSequence> {
  constructor(private readonly sequence: Iterable<TSequence>) {}

  [Symbol.iterator]() {
    return this.sequence[Symbol.iterator]()
  }

  where(predicate: Predicate<TSequence>) {
    const sequence = this.sequence
    const step = function* () {
      for (const item of sequence) {
        if (predicate(item)) yield item
      }
    }
    return new Pipe(step())
  }

  each<TReturn>(transform: Transform<TSequence, TReturn>) {
    const sequence = this.sequence

    const step = function* () {
      for (const item of sequence) {
        yield transform(item)
      }
    }
    return new Pipe(step())
  }

  take(count: number) {
    const sequence = this.sequence

    const step = function* () {
      let n = 0
      for (const value of sequence) {
        if (n === count) {
          return
        }
        n++
        yield value
      }
    }

    return new Pipe(step())
  }

  all() {
    return Array.from(this.sequence)
  }
}
