''' Read input from STDIN. Print your output to STDOUT '''
    #Use input() to read input from STDIN and use print to write your output to STDOUT

def getTicketNo(N,integer_on_Ticket):
    eleIndex = sorted(range(len(integer_on_Ticket)),key=lambda k: integer_on_Ticket[k], reverse=True)
    new_integer_on_ticket = integer_on_Ticket[:]
    new_integer_on_ticket.sort(reverse=True)
    maxSum = 0
    ticketPrint = []

    for i in range(N):
        currEle = new_integer_on_ticket[i]
        if currEle > 0:
            printArr = []
            currSum = currEle
            sortedIndex = eleIndex[i]
            printArr.append(sortedIndex)
            validIndex = sortedIndex - 1
            # Backwards
            for b in range(sortedIndex - 1, -1, -1):
                bEle = integer_on_Ticket[b]
                if(bEle == 0):
                    validIndex = validIndex - 1
                    continue
                if(b == validIndex):
                    continue
                validIndex = b - 1
                if(bEle > 0):
                    currSum += bEle
                    printArr.append(b)

            validIndex = sortedIndex + 1
            # Forwards
            for f in range(sortedIndex + 1, N):
                fEle = integer_on_Ticket[f]
                if(fEle == 0):
                    validIndex = validIndex + 1
                    continue
                if(f == validIndex):
                    continue
                validIndex = f + 1
                if(fEle > 0):
                    currSum += fEle
                    printArr.append(f)
            
            if(currSum > maxSum):
                maxSum = currSum
                ticketPrint = printArr
            elif currSum == maxSum:
                maxLastEle = integer_on_Ticket[max(ticketPrint)]
                currMaxLastEle = integer_on_Ticket[max(printArr)]
                if(currMaxLastEle > maxLastEle):
                    ticketPrint = printArr

        else:
            break

    ticketPrint.sort(reverse=True)
    finalStr = ''
    for currEle in ticketPrint:
        finalStr += str(integer_on_Ticket[currEle])
    print(finalStr)

def main():

    T = int(input())
    for i in range(T):
        N = int(input())
        integer_on_Ticket = list(map(int, input().split()))
        getTicketNo(N,integer_on_Ticket)


main()

