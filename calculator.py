#!/usr/bin/env python3

def add(x, y):
    """Add two numbers"""
    return x + y

def subtract(x, y):
    """Subtract two numbers"""
    return x - y

def multiply(x, y):
    """Multiply two numbers"""
    return x * y

def divide(x, y):
    """Divide two numbers"""
    if y == 0:
        raise ValueError("Cannot divide by zero")
    return x / y

if __name__ == "__main__":
    print("Simple Calculator - CI Demo")
    print(f"5 + 3 = {add(5, 3)}")
    print(f"10 - 4 = {subtract(10, 4)}")
    print(f"3 * 7 = {multiply(3, 7)}")
    print(f"15 / 3 = {divide(15, 3)}")
