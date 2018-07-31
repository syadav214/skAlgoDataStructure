//  g++ -std=c++11 test.cpp for c++ 11 syntaxes such as

#include <iostream>
using namespace std;

class DoublyLinkedListNode
{
  public:
    int data;
    DoublyLinkedListNode *next;
    DoublyLinkedListNode *prev;

    DoublyLinkedListNode(int node_data)
    {
        this->data = node_data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

class DoublyLinkedList
{
  public:
    DoublyLinkedListNode *head;
    DoublyLinkedListNode *tail;

    DoublyLinkedList()
    {
        this->head = nullptr;
        this->tail = nullptr;
    }

    void insertNode(int node_data)
    {
        DoublyLinkedListNode *node = new DoublyLinkedListNode(node_data);
        if (!this->head)
        {
            this->head = node;
        }
        else
        {
            this->tail->next = node;
            node->prev = this->tail;
        }

        this->tail = node;
    }

    void print_doubly_linked_list(string sep)
    {
        DoublyLinkedListNode *node = this->head;
        while (node)
        {
            cout << " node=> " << node->data;

            node = node->next;

            if (node)
            {
                cout << " sep=> " << sep;
            }
        }
    }

    DoublyLinkedListNode *SortedInsert(DoublyLinkedListNode *head, int data)
    {
        DoublyLinkedListNode *temp = head;
        DoublyLinkedListNode *newNode = new DoublyLinkedListNode(data);
        if (temp == NULL)
        {
            temp = newNode;
            head = temp;
            return head;
        }

        while ((newNode->data > temp->data) && temp->next != NULL)
        {
            temp = temp->next;
        }

        if (temp->next == NULL && newNode->data > temp->data)
        {
            newNode->prev = temp;
            temp->next = newNode;
            return head;
        }

        newNode->prev = temp->prev;
        temp->prev = newNode;
        newNode->next = temp;

        if (newNode->prev != NULL)
        {
            newNode->prev->next = newNode;
        }

        if (newNode->prev == NULL)
        {
            temp = newNode;
            return temp;
        }

        return head;
    }
};

int main()
{
    DoublyLinkedList *node = new DoublyLinkedList();
    node->insertNode(5);
    node->insertNode(15);
    node->print_doubly_linked_list("|");
    cout
        << "hello";
    return 0;
}