import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import RootLayout from '../layout'

describe('RootLayout', () => {
  it('renders children properly', () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('sets correct language attribute', () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    const htmlElement = document.documentElement
    expect(htmlElement).toHaveAttribute('lang', 'es')
  })

  it('sets correct html classes', () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    )
    
    const htmlElement = document.documentElement
    const classNames = htmlElement.className
    
    expect(classNames).toContain('h-full')
    expect(classNames).toContain('antialiased')
  })
})