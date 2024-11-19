import React, { useEffect, useRef, useState } from 'react';
import AdminPageHeader from '../../components/Admin/AdminPageHeader';
import { Key, Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react';
import { getUsers, addUser, editUser, deleteUser, resetPassword } from '../../api/api';
import { toast } from 'sonner';

const AdminUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef(0);
  const passwordRef = useRef('');
  const roleRef = useRef('');

  const fetchData = async () => {
    try {
      const res = await getUsers();
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      role: roleRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await addUser(user);
      if (response.status === 200) {
        toast.success('User Added');
        setShowAdd(false);
        fetchData();
      }
    } catch (error) {
      toast.error('Error while Adding');
      console.error(error);
    }
  };

  const editHelper = (user) => {
    setCurrentUser(user);
    setShowEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      role: roleRef.current.value,
    };
    try {
      const response = await editUser(user, currentUser._id);
      if (response.status === 200) {
        setShowEdit(!showEdit);
        fetchData();
        toast.info('User Updated !');
      }
    } catch (error) {
      toast.error('Error while Updating');
    }
  };

  const resetHelper = (user) => {
    setCurrentUser(user);
    setShowReset(true);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword({ password: passwordRef.current.value }, currentUser._id);
      if (response.status === 200) {
        setShowReset(!showReset);
        toast.warning('User Password Updated !');
      }
    } catch (error) {
      toast.error('Error while Updating');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id);
      if (response.status === 200) {
        toast.success('User Deleted');
        fetchData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <div className="tablet-loader">
          <div className="tablet">
            <div className="tablet__indicator"></div>
          </div>
        </div>
      </div>        
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
        <TriangleAlert className='text-orange-400 h-12 w-12' />
        <p>No Users Available!</p>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Users' />
        <button
          className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-lg transition-all duration-300'
          onClick={() => setShowAdd(!showAdd)}>
          <Plus className='w-8 h-8' />
        </button>
      </div>

      <div className="overflow-x-auto w-full max-h-[60vh]"> {/* Limit height and add horizontal scrolling */}
        <table className='w-full table-auto border-collapse border shadow-lg rounded-md'>
          <thead className='shadow-md font-bold text-blue-500 text-left rounded-md'>
            <tr>
              <th className='p-3'>UID</th>
              <th className='p-3'>Name</th>
              <th className='p-3'>Role</th>
              <th className='p-3'>Email</th>
              <th className='p-3'>Phone</th>
              <th className='p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className='transition-all duration-300'>
                <td className='p-3'>{user._id}</td>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.role}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.phone}</td>
                <td className='p-3 flex gap-4'>
                  <button
                    className='p-2 rounded-md text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'
                    onClick={() => editHelper(user)}>
                    <Pencil />
                  </button>
                  <button
                    className='p-2 rounded-md text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300'
                    onClick={() => resetHelper(user)}>
                    <Key />
                  </button>
                  <button
                    className='p-2 rounded-md text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300'
                    onClick={() => handleDelete(user._id)}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      {showAdd && (
        <div className='absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40'>
          <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='w-full flex justify-between items-center px-4'>
              <h1 className='text-xl font-bold text-blue-500'>Add User</h1>
              <div
                className='text-red-500 cursor-pointer'
                onClick={() => setShowAdd(false)}>
                <X className='h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white' />
              </div>
            </div>
            <form className='flex flex-col items-center gap-8' onSubmit={handleAdd}>
              <input ref={nameRef} type='text' placeholder='Name' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required autoFocus />
              <input ref={emailRef} type='email' placeholder='Email' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <input ref={phoneRef} type='number' placeholder='Phone' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <input ref={passwordRef} type='password' placeholder='Password' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <select ref={roleRef} className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required>
                <option value='' disabled selected>
                  Select Role
                </option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </select>
              <button type='submit' className='p-4 bg-blue-500 text-white rounded-md shadow-md mt-4 hover:bg-blue-400'>
                Add User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEdit && (
        <div className='absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40'>
          <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='w-full flex justify-between items-center px-4'>
              <h1 className='text-xl font-bold text-blue-500'>Edit User</h1>
              <div
                className='text-red-500 cursor-pointer'
                onClick={() => setShowEdit(false)}>
                <X className='h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white' />
              </div>
            </div>
            <form className='flex flex-col items-center gap-8' onSubmit={handleEdit}>
              <input ref={nameRef} defaultValue={currentUser.name} type='text' placeholder='Name' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required autoFocus />
              <input ref={emailRef} defaultValue={currentUser.email} type='email' placeholder='Email' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <input ref={phoneRef} defaultValue={currentUser.phone} type='number' placeholder='Phone' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <select ref={roleRef} defaultValue={currentUser.role} className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
              </select>
              <button type='submit' className='p-4 bg-blue-500 text-white rounded-md shadow-md mt-4 hover:bg-blue-400'>
                Update User
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reset User Password Modal */}
      {showReset && (
        <div className='absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40'>
          <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='w-full flex justify-between items-center px-4'>
              <h1 className='text-xl font-bold text-blue-500'>Reset Password</h1>
              <div
                className='text-red-500 cursor-pointer'
                onClick={() => setShowReset(false)}>
                <X className='h-8 w-8 border-2 p-1 border-red-500 rounded-full hover:bg-red-500 hover:text-white' />
              </div>
            </div>
            <form className='flex flex-col items-center gap-8' onSubmit={handleReset}>
              <input ref={passwordRef} type='password' placeholder='New Password' className='w-full p-4 bg-[#f5f5f7] border-b-2 focus:border-blue-400 rounded-sm shadow-md' required />
              <button type='submit' className='p-4 bg-blue-500 text-white rounded-md shadow-md mt-4 hover:bg-blue-400'>
                Reset Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
