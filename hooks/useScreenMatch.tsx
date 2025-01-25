'use client'

import { useEffect, useMemo, useState } from "react"
import _ from "lodash"

export function useScreenMatch<T extends Array<readonly [number, string]>>(_config: T): T[number][1] | null {

    const config = useMemo(() => {
        return _config.sort((a, b) => b[0] - a[0])
    }, [_config])

    const [screen, setScreen] = useState<string | null>(null)

    useEffect(() => {
        const handleResize = _.throttle(() => {
            const width = window.innerWidth
            const matched = config.find(([breakpoint, _,]) => width >= breakpoint)
            console.log(`with: ${width}, matched: ${matched}`)
            if (matched) {
                setScreen(matched[1])
            } else {
                setScreen(null)
            }
        }, 300)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return screen
}


